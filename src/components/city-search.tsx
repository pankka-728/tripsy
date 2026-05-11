"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchCities, CityInfo } from "@/lib/city-data";

interface CitySearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CitySearch({ value, onChange, placeholder = "输入城市名称搜索..." }: CitySearchProps) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<CityInfo[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.trim().length > 0) {
      const cities = searchCities(newQuery);
      setResults(cities);
      setIsOpen(cities.length > 0);
      setHighlightedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (city: CityInfo) => {
    setQuery(city.name);
    onChange(city.name);
    setIsOpen(false);
    setResults([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < results.length) {
          handleSelect(results[highlightedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const handleClear = () => {
    setQuery("");
    onChange("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          ref={inputRef}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim().length > 0 && results.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder={placeholder}
          className="pl-10 pr-10"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-72 overflow-y-auto">
          {results.map((city, index) => (
            <button
              key={`${city.name}-${index}`}
              onClick={() => handleSelect(city)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-stone-50 transition-colors ${
                index === highlightedIndex ? "bg-stone-50" : ""
              }`}
            >
              <MapPin className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-900">{city.name}</span>
                  <span className="text-sm text-slate-500">{city.nameEn}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-500">{city.country}</span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-500">{city.region}</span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-amber-600">建议{city.suggestedDays}天</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {city.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs px-1.5 py-0.5 bg-stone-100 text-slate-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg p-4 text-center text-slate-500">
          未找到匹配的城市，请尝试其他关键词
        </div>
      )}
    </div>
  );
}
