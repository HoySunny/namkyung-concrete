"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calculator, ArrowUp } from "lucide-react";
import { companyData } from "@/data/company";
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

      {/* Mobile Bottom Floating Action Bar (SPEC.md requirement: 모바일 하단 고정 플로팅 바) */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 backdrop-blur-xl flex items-center gap-2 ${theme.floatingBar.bottomBar}`}>
        <a
          href="#calculator"
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-sm font-semibold transition-colors ${theme.floatingBar.calcBtn}`}
        >
          <Calculator className="w-4 h-4 text-red-500" />
          <span>물량 계산기</span>
        </a>

        <a
          href="tel:055-582-4346"
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-sm font-bold shadow-lg shadow-red-600/30 transition-colors ${theme.floatingBar.phoneBtn}`}
        >
          <Phone className="w-4 h-4 animate-pulse" />
          <span>전화상담 (055-582-4346~7)</span>
        </a>
      </div>
    </>
  );
}
