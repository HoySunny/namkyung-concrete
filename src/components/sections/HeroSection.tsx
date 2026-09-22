"use client";

import React from "react";
import Image from "next/image";
import { companyData, keyMetrics } from "@/data/company";
import { Phone, Calculator, FileText, Download, Send } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Background Image Container with aerial panoramic factory view */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/pic/hero/factory-panoramic.jpg"
          alt="남경콘크리트 대송공장 전경"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center filter brightness-[1.0] contrast-[1.02]"
        />
        {/* Ultra-subtle text backdrop gradient to let drone panoramic view & sky shine brightly */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 text-red-400 border border-red-500/40 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="drop-shadow-sm">30년 업력의 콘크리트 2차 제품 제조 전문 기업</span>
          </div>

          {/* Main Slogan (SPEC.md requirement) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-balance mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            30년의 단단한 기초,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              정직한 품질
            </span>
            로 증명합니다.
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-xl text-white font-medium leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            한국산업규격 <strong className="text-white font-bold underline decoration-red-500/60 underline-offset-4">KS F 4004(벽돌)</strong> ·{" "}
            <strong className="text-white font-bold underline decoration-red-500/60 underline-offset-4">KS F 4002(C종 블록)</strong> 인증 및 환경부 친환경 자원순환
            환경표지 획득. 조달청 나라장터 공공구매 다수공급자계약(MAS) 정품 제조 공장입니다.
          </p>

          {/* CTA Buttons - Visitor & On-site manager prioritized sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-3 sm:gap-4 mb-14">
            {/* 1. Direct Phone Call (Main Signature Red Highlight) */}
            <a
              href="tel:055-582-4346"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-xl shadow-red-600/50 border border-red-500 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 animate-pulse text-white" />
              <span>직통 전화 문의</span>
              <span className="font-mono text-sm font-semibold tracking-tight opacity-95">055-582-4346~7</span>
            </a>

            {/* 2. Catalog Download */}
            <a
              href="/docs/catalog.pdf"
              download="남경콘크리트 카달로그.pdf"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/75 hover:bg-slate-900/90 text-white font-semibold text-base border border-white/30 backdrop-blur-md shadow-lg transition-all hover:border-white/60"
            >
              <Download className="w-4 h-4 text-red-400" />
              <span>카탈로그 다운로드</span>
            </a>

            {/* 3. Material Quantity Calculator */}
            <a
              href="#calculator"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/75 hover:bg-slate-900/90 text-white font-semibold text-base border border-white/20 backdrop-blur-md shadow-lg transition-all hover:border-white/40"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>자재 물량 계산기</span>
            </a>

            {/* 4. Online Quotation Form */}
            <a
              href="#quote"
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/75 hover:bg-slate-900/90 text-white font-semibold text-base border border-white/20 backdrop-blur-md shadow-lg transition-all hover:border-white/40"
            >
              <Send className="w-4 h-4 text-slate-300" />
              <span>온라인 견적 문의</span>
            </a>
          </div>
        </div>

        {/* Key Metrics Counter Grid (Clean Modern Frosted Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15">
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950/65 border border-white/15 backdrop-blur-md hover:border-white/30 shadow-xl transition-all"
            >
              <div className="text-xs sm:text-sm text-slate-300 font-medium mb-1 drop-shadow-sm">
                {item.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight drop-shadow-md">
                  {item.value}
                </span>
                <span className="text-sm sm:text-base font-bold text-red-400">
                  {item.unit}
                </span>
              </div>
              <div className="text-xs text-slate-300/90 mt-2 line-clamp-1 drop-shadow-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
