"use client";

import React from "react";
import Image from "next/image";
import { companyData, keyMetrics } from "@/data/company";
import { Phone, Calculator, Download } from "lucide-react";
import { theme } from "@/config/theme";

export default function HeroSection() {
  return (
    <section className={`relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden ${theme.hero.sectionBg}`}>
      {/* Background Image Container with daylight factory view */}
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
        {/* Ambient overlays */}
        <div className={`absolute inset-0 ${theme.hero.overlay}`} />
        <div className={`absolute inset-0 ${theme.hero.overlayGradient}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="max-w-2xl">
          {/* Glassmorphic Headline & Action Clean Card Wrapping */}
          <div className={theme.hero.glassCard}>
            {/* Top Badge: 30년 역사의 콘크리트 2차 제품 제조 */}
            <div className={theme.hero.badge}>
              <span className={theme.hero.badgeDot} />
              <span>30년 역사의 콘크리트 2차 제품 제조</span>
            </div>

            {/* Main Slogan Title */}
            <h1 className={theme.hero.title}>
              30년의 단단한 기초,
              <br />
              <span className={theme.hero.titleAccent}>
                정직한 품질
              </span>
              로 증명합니다.
            </h1>

            {/* Sub Copy */}
            <p className={theme.hero.subCopy}>
              한국산업규격 <strong className={theme.hero.subCopyStrong}>KS F 4004(벽돌)</strong> ·{" "}
              <strong className={theme.hero.subCopyStrong}>KS F 4002(C종 블록)</strong> 인증 및 환경부 자원순환
              환경표지 획득. 조달청 나라장터 공공구매 다수공급자계약(MAS) 정품 제조 공장입니다.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-wrap items-center gap-3">
              {/* 1. Direct Phone Call (안전 오렌지/레드 솔리드) */}
              <a
                href="tel:055-582-4346"
                className={theme.hero.btnPhone}
              >
                <Phone className="w-4 h-4 animate-pulse text-white flex-shrink-0" />
                <span>전화 문의</span>
                <span className="font-mono text-xs sm:text-sm font-semibold opacity-95">055-582-4346~7</span>
              </a>

              {/* 2. Catalog Download (신뢰감 있는 인더스트리얼 블루 아웃라인) */}
              <a
                href="/docs/catalog.pdf"
                download="남경콘크리트 카달로그.pdf"
                className={theme.hero.btnCatalog}
              >
                <Download className="w-4 h-4 text-blue-700 flex-shrink-0" />
                <span>카달로그</span>
              </a>

              {/* 3. Material Quantity Calculator (화이트/그레이 고대비 버튼) */}
              <a
                href="#calculator"
                className={theme.hero.btnCalculator}
              >
                <Calculator className="w-4 h-4 text-slate-700 flex-shrink-0" />
                <span>물량 계산기</span>
              </a>
            </div>
          </div>
        </div>

        {/* Key Metrics Counter Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-10 ${theme.hero.metricBorderTop}`}>
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl ${theme.hero.metricCard}`}
            >
              <div className={`text-xs sm:text-sm mb-1 ${theme.hero.metricLabel}`}>
                {item.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${theme.hero.metricValue}`}>
                  {item.value}
                </span>
                <span className={`text-sm sm:text-base font-bold ${theme.hero.metricUnit}`}>
                  {item.unit}
                </span>
              </div>
              <div className={`text-xs mt-1.5 line-clamp-1 ${theme.hero.metricDesc}`}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
