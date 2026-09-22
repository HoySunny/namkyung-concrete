"use client";

import React from "react";
import Image from "next/image";
import { companyData, keyMetrics } from "@/data/company";
import { Phone, Calculator, FileText, Download, Send } from "lucide-react";
import { theme } from "@/config/theme";

export default function HeroSection() {
  return (
    <section className={`relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden ${theme.hero.sectionBg}`}>
      {/* Background Image Container with aerial panoramic factory view */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/pic/hero/factory-panoramic.jpg"
          alt="남경콘크리트 대송공장 전경"
          fill
          priority
          sizes="100vw"
          quality={95}
          className={`object-cover object-center filter ${theme.hero.imageBrightness}`}
        />
        {/* Backdrop gradients customized by theme preset */}
        <div className={`absolute inset-0 ${theme.hero.overlayLeft}`} />
        <div className={`absolute inset-0 ${theme.hero.overlayBottom}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 ${theme.hero.badge}`}>
            <span className={`w-2 h-2 rounded-full ${theme.hero.badgeDotPing} animate-ping`} />
            <span>30년 역사의 콘크리트 2차 제품 제조</span>
          </div>

          {/* Main Slogan (SPEC.md requirement) */}
          <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-balance mb-6 ${theme.hero.title}`}>
            30년의 단단한 기초,
            <br />
            <span className={theme.hero.titleGradient}>
              정직한 품질
            </span>
            로 증명합니다.
          </h1>

          {/* Sub Copy */}
          <p className={`text-base sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl ${theme.hero.subCopy}`}>
            한국산업규격 <strong className={theme.hero.subCopyStrong}>KS F 4004(벽돌)</strong> ·{" "}
            <strong className={theme.hero.subCopyStrong}>KS F 4002(C종 블록)</strong> 인증 및 환경부 친환경 자원순환
            환경표지 획득. 조달청 나라장터 공공구매 다수공급자계약(MAS) 정품 제조 공장입니다.
          </p>

          {/* CTA Buttons - Visitor & On-site manager prioritized sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-3 sm:gap-4 mb-14">
            {/* 1. Direct Phone Call (Main Signature Red Highlight) */}
            <a
              href="tel:055-582-4346"
              className={`flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl ${theme.hero.btnPhone}`}
            >
              <Phone className="w-5 h-5 animate-pulse text-white" />
              <span>전화 문의</span>
              <span className="font-mono text-sm font-semibold tracking-tight opacity-95">055-582-4346~7</span>
            </a>

            {/* 2. Catalog Download */}
            <a
              href="/docs/catalog.pdf"
              download="남경콘크리트 카달로그.pdf"
              className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl ${theme.hero.btnCatalog}`}
            >
              <Download className="w-4 h-4 text-red-500" />
              <span>카달로그</span>
            </a>

            {/* 3. Material Quantity Calculator */}
            <a
              href="#calculator"
              className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl ${theme.hero.btnCalculator}`}
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>물량 계산기</span>
            </a>

            {/* 4. Online Quotation Form */}
            <a
              href="#quote"
              className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl ${theme.hero.btnQuote}`}
            >
              <Send className="w-4 h-4 text-slate-500" />
              <span>온라인 견적 문의</span>
            </a>
          </div>
        </div>

        {/* Key Metrics Counter Grid (Cards driven by theme preset) */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 ${theme.hero.metricBorderTop}`}>
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl ${theme.hero.metricCard}`}
            >
              <div className={`text-xs sm:text-sm mb-1 ${theme.hero.metricLabel}`}>
                {item.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${theme.hero.metricValue}`}>
                  {item.value}
                </span>
                <span className={`text-sm sm:text-base font-bold ${theme.hero.metricUnit}`}>
                  {item.unit}
                </span>
              </div>
              <div className={`text-xs mt-2 line-clamp-1 ${theme.hero.metricDesc}`}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
