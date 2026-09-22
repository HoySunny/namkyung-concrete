"use client";

import React from "react";
import Image from "next/image";
import { keyMetrics } from "@/data/company";
import { Phone, Download, Calculator, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-slate-100">
      {/* 1. Full-bleed Background Image (100% 밝고 선명하게 그대로 노출) */}
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

      {/* 2. Hero Content Container with Frosted Glass Panel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 w-full flex-1 flex flex-col justify-center items-start">
        <div className="max-w-2xl bg-white/80 backdrop-blur-md border border-white/80 p-8 sm:p-10 rounded-2xl shadow-2xl">
          {/* Main Title */}
          <h1 className="text-slate-900 font-extrabold text-3xl sm:text-4xl leading-tight">
            30년 업력의 기술,
            <br />
            정직한 품질로 증명합니다.
          </h1>

          {/* Subtext */}
          <p className="text-slate-700 text-base sm:text-lg mt-3">
            경남 함안 본사 공장 직영 · 속빈콘크리트블록 및 콘크리트 벽돌 영남권 신속 배차
          </p>

          {/* 4 CTA Buttons (Desktop: flex-wrap / Mobile: grid-cols-2) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 mt-6">
            {/* 1) 직통 전화 : 055-582-4346~7 */}
            <a
              href="tel:055-582-4346"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-white flex-shrink-0" />
              <span>직통 전화 : 055-582-4346~7</span>
            </a>

            {/* 2) 카탈로그 다운로드 */}
            <a
              href="/docs/catalog.pdf"
              download="남경콘크리트 카달로그.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-white flex-shrink-0" />
              <span>카탈로그 다운로드</span>
            </a>

            {/* 3) 자재 물량 계산기 */}
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/90 border border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-slate-700 flex-shrink-0" />
              <span>자재 물량 계산기</span>
            </a>

            {/* 4) 온라인 견적 문의 */}
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/90 border border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-slate-700 flex-shrink-0" />
              <span>온라인 견적 문의</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Key Metrics Counter Grid (밝은 글래스모피즘 카드) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/70 shadow-lg text-slate-900 transition-all hover:bg-white/95"
            >
              <div className="text-xs sm:text-sm mb-1 text-slate-600 font-medium">
                {item.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">
                  {item.value}
                </span>
                <span className="text-sm sm:text-base font-bold text-blue-700">
                  {item.unit}
                </span>
              </div>
              <div className="text-xs mt-1.5 text-slate-600 line-clamp-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
