'use client';

import { Suspense } from 'react';
import ItineraryContent from './ItineraryContent';

export default function ItineraryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto mb-4"></div>
          <p className="text-slate-600">加载中...</p>
        </div>
      </div>
    }>
      <ItineraryContent />
    </Suspense>
  );
}
