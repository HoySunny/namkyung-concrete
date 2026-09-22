"use client";

import React from "react";
import Image from "next/image";
import { keyMetrics } from "@/data/company";
import { Phone, Download, Calculator, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-slate-900">
      {/* 1. Full-bleed Background Image */}
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
        {/* Subtle left-side gradient for text readability while keeping right-side yard & silos clear & bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/30 to-transparent" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl text-left">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-slate-100 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>EST. 1991 · KS 및 환경표지 직접생산 인증 기업</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] drop-shadow-lg mb-6">
            30년 업력의 기술,
            <br />
            <span className="text-white drop-shadow-md">정직한 품질로 증명합니다.</span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl mb-10 drop-shadow">
            경상남도 함안 본사 공장 직영 · 속빈콘크리트블록 및 콘크리트 벽돌 영남권 전역 신속 배차
          </p>

          {/* 4 CTA Buttons (Desktop: Row / Mobile: 2-Column Grid) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 pt-1">
            {/* 1) 직통 전화 : 055-582-4346~7 (#E02424 / bg-red-600) */}
            <a
              href="tel:055-582-4346"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm md:text-base shadow-lg shadow-red-600/30 transition-all transform active:scale-95"
            >
              <Phone className="w-4 h-4 text-white flex-shrink-0" />
              <span className="truncate">직통 전화 : 055-582-4346~7</span>
            </a>

            {/* 2) 카탈로그 다운로드 (화이트 솔리드 bg-white text-slate-900) */}
            <a
              href="/docs/catalog.pdf"
              download="남경콘크리트 카달로그.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm md:text-base shadow-lg shadow-black/10 transition-all transform active:scale-95"
            >
              <Download className="w-4 h-4 text-slate-800 flex-shrink-0" />
              <span className="truncate">카탈로그 다운로드</span>
            </a>

            {/* 3) 자재 물량 계산기 (반투명 글래스 스타일) */}
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-md border border-white/30 font-semibold text-xs sm:text-sm md:text-base transition-all transform active:scale-95"
            >
              <Calculator className="w-4 h-4 text-white flex-shrink-0" />
              <span className="truncate">자재 물량 계산기</span>
            </a>

            {/* 4) 온라인 견적 문의 (아웃라인 테두리 스타일) */}
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 rounded-xl border-2 border-white/70 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm md:text-base backdrop-blur-sm transition-all transform active:scale-95"
            >
              <FileText className="w-4 h-4 text-white flex-shrink-0" />
              <span className="truncate">온라인 견적 문의</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Key Metrics Counter Grid (Bottom Ambient Banner) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-6 border-t border-white/20">
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-950/45 backdrop-blur-md border border-white/15 text-white transition-all hover:bg-slate-950/60"
            >
              <div className="text-xs sm:text-sm mb-1 text-slate-300 font-medium">
                {item.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                  {item.value}
                </span>
                <span className="text-sm sm:text-base font-bold text-red-400">
                  {item.unit}
                </span>
              </div>
              <div className="text-xs mt-1.5 text-slate-300 line-clamp-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
