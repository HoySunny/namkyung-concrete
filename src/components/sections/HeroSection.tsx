"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-slate-100 px-4">
      {/* 1. Full-bleed Background Image (완전 개방) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/pic/hero/factory-panoramic.jpg"
          alt="남경콘크리트 대송공장 전경"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center"
        />
      </div>

      {/* 2. 중앙 플로팅 캡슐 바 (Floating Capsule Bar) */}
      <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-6 px-6 sm:px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-md border border-white/70 shadow-2xl max-w-3xl w-full mx-auto">
        {/* 좌측 */}
        <span className="text-slate-600 font-medium text-sm hidden sm:inline whitespace-nowrap">
          30년 전통의 기초
        </span>

        {/* 중앙: 공식 심볼 + 브랜드 텍스트 */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Image
            src="/pic/logo/symbol.png"
            alt="남경콘크리트 심볼"
            width={26}
            height={26}
            className="w-6 h-6 sm:w-6.5 sm:h-6.5 object-contain"
          />
          <h1 className="text-slate-900 font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
            남경콘크리트
          </h1>
        </div>

        {/* 우측 (CTA 액션 그룹) */}
        <div className="flex items-center gap-2">
          <a
            href="tel:055-582-4346"
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm transition-colors whitespace-nowrap"
          >
            전화문의
          </a>
          <a
            href="/docs/catalog.pdf"
            download="남경콘크리트 카달로그.pdf"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
          >
            카달로그
          </a>
        </div>
      </div>
    </section>
  );
}

