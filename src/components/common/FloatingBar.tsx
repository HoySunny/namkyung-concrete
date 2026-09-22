"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calculator, ArrowUp, MessageSquare } from "lucide-react";
import { companyData } from "@/data/company";

export default function FloatingBar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to top floating button (Desktop & Tablet) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="맨 위로 가기"
          className="fixed bottom-20 md:bottom-8 right-5 z-40 p-3 rounded-full bg-slate-900/90 text-white shadow-xl hover:bg-red-600 transition-all transform hover:-translate-y-1 backdrop-blur-md border border-slate-700 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Bottom Floating Action Bar (SPEC.md requirement: 모바일 하단 고정 플로팅 바) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-slate-800 p-2.5 backdrop-blur-xl shadow-2xl flex items-center gap-2">
        <a
          href="#calculator"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700 hover:bg-slate-700 transition-colors"
        >
          <Calculator className="w-4 h-4 text-red-400" />
          <span>물량 계산기</span>
        </a>

        <a
          href={`tel:${companyData.telDirect}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-red-600 text-white text-sm font-bold shadow-lg shadow-red-600/30 hover:bg-red-700 transition-colors"
        >
          <Phone className="w-4 h-4 animate-pulse" />
          <span>직통전화 ({companyData.telDirect})</span>
        </a>
      </div>
    </>
  );
}
