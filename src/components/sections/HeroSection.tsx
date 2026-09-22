"use client";

import React from "react";
import Image from "next/image";
import { Phone, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-slate-100">
      {/* 1. Full-bleed Background Image with bright & clean overlay */}
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
        {/* 맑고 화사한 화이트 톤 오버레이 (푸른 하늘과 야적장 채도가 시원하게 살아남) */}
        <div className="absolute inset-0 bg-white/[0.11] backdrop-brightness-105" />
      </div>

      {/* 2. Hero Content Container with Professional Glass Panel */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-8 py-10 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-lg text-center flex flex-col items-center">
          {/* Main Title */}
          <h1 className="text-slate-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight drop-shadow-sm">
            30년 업력의 기술,
            <br />
            정직한 품질로 증명합니다.
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
            경남 함안 본사 공장 직영 · 속빈콘크리트블록 및 콘크리트 벽돌 영남권 신속 배차
          </p>

          {/* Button Group (중앙 정렬) */}
          <div className="flex flex-row justify-center items-center gap-3 mt-8">
            {/* 1) 전화문의 */}
            <a
              href="tel:055-582-4346"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3 rounded-lg shadow-md transition-all active:scale-95 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>전화문의</span>
            </a>

            {/* 2) 카달로그 */}
            <a
              href="/docs/catalog.pdf"
              download="남경콘크리트 카달로그.pdf"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold border border-slate-300 px-7 py-3 rounded-lg shadow-sm transition-all active:scale-95 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 text-slate-700" />
              <span>카달로그</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
