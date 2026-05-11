"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  Download, 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  Calendar,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_ITINERARY } from "@/lib/mock-data";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function PDFPage() {
  const router = useRouter();
  const [generating, setGenerating] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleGeneratePDF = async () => {
    setGenerating(true);
    
    try {
      if (pdfRef.current) {
        const canvas = await html2canvas(pdfRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        const pdf = new jsPDF('p', 'mm', 'a4');
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`${MOCK_ITINERARY.title}.pdf`);
      }
    } catch (error) {
      console.error('PDF生成失败:', error);
      alert('PDF生成失败，请重试');
    }
    
    setGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回行程
          </Button>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      生成游记式行程书
                    </h1>
                    <p className="text-gray-600">
                      将您的完美旅程变成精美的PDF游记，永久珍藏美好回忆
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  onClick={handleGeneratePDF}
                  disabled={generating}
                  className="bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {generating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      生成中...
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5 mr-2" />
                      下载PDF游记
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 border-b flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  游记预览
                </span>
                <span className="text-xs text-gray-500">A4尺寸</span>
              </div>
              <CardContent className="p-0 bg-gray-200">
                <div className="p-8 flex justify-center">
                  {/* PDF Preview */}
                  <div 
                    ref={pdfRef}
                    className="bg-white shadow-2xl w-full max-w-[210mm]"
                    style={{ aspectRatio: '210/297' }}
                  >
                    {/* Cover Page */}
                    <div className="p-8 h-full flex flex-col bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <Sparkles className="h-16 w-16 mb-6 opacity-80" />
                        <h1 className="text-4xl font-bold mb-4">{MOCK_ITINERARY.title}</h1>
                        <p className="text-xl opacity-90 mb-8">{MOCK_ITINERARY.description}</p>
                        <div className="flex items-center gap-6 text-lg opacity-80">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            {MOCK_ITINERARY.request.departureDate}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            {MOCK_ITINERARY.request.destinations.join(' · ')}
                          </span>
                        </div>
                      </div>
                      <div className="text-center opacity-70">
                        <p>Tripsign 为您定制</p>
                        <p className="text-sm">www.tripsy.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">游记特色</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">精美排版</p>
                      <p className="text-sm text-gray-600">专业的杂志式排版设计</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">图文并茂</p>
                      <p className="text-sm text-gray-600">景点美图让游记更生动</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">完整信息</p>
                      <p className="text-sm text-gray-600">包含所有行程细节和预算</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">永久保存</p>
                      <p className="text-sm text-gray-600">PDF格式方便存储和分享</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">📚 想要实体纪念册？</h3>
                <p className="text-yellow-800 text-sm mb-4">
                  我们可以将您的精美游记打印成精装纪念书册，成为永久的珍藏！
                </p>
                <Button 
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                  onClick={() => router.push('/book')}
                >
                  了解实体纪念册
                </Button>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => router.push('/itinerary?demo=true')}
              >
                返回行程
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                onClick={() => router.push('/book')}
              >
                下一步：定制纪念册
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
