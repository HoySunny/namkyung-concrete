"use client";

import React, { useState, useEffect } from "react";
import { Phone, Download, ArrowUp } from "lucide-react";
import { theme } from "@/config/theme";

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
          className={`fixed bottom-20 md:bottom-8 right-5 z-40 p-3 rounded-full shadow-xl transition-all transform hover:-translate-y-1 backdrop-blur-md focus:outline-none ${theme.floatingBar.scrollTopBtn}`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Bottom Floating Action Bar (2버튼 5:5 그리드 미니멀 개편) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 border-t border-slate-200 px-4 py-2.5 pb-safe grid grid-cols-2 gap-3">
        {/* 버튼 1 [카달로그] */}
        <a
          href="/docs/catalog.pdf"
          download="남경콘크리트 카달로그.pdf"
          className="bg-white border border-slate-300 text-slate-800 font-medium py-3 rounded-lg shadow-sm flex items-center justify-center gap-1.5"
        >
          <Download className="w-4 h-4 text-slate-600" />
          <span>카달로그</span>
        </a>

        {/* 버튼 2 [전화상담] */}
        <a
          href="tel:055-582-4346"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md flex items-center justify-center gap-1.5"
        >
          <Phone className="w-4 h-4" />
          <span>전화상담</span>
        </a>
      </div>
    </>
  );
}
