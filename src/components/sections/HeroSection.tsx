"use client";

import React from "react";
import { companyData, keyMetrics } from "@/data/company";
import { Phone, Calculator, FileText, ChevronRight, Shield, Award, CheckCircle2 } from "lucide-react";
import SmartImage from "@/components/common/SmartImage";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Fallback */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src="/pic/hero/factory-panoramic.jpg"
          alt="남경콘크리트 대송공장 전경"
          category="hero"
          fallbackUnsplash="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?q=80&w=1920&auto=format&fit=crop"
          aspectRatio="aspect-auto"
          className="w-full h-full object-cover"
          priority
        />
        {/* Layered industrial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>30년 업력의 콘크리트 2차 제품 제조 전문 기업</span>
          </div>

          {/* Main Slogan (SPEC.md requirement) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-balance mb-6">
            30년의 단단한 기초,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              정직한 품질
            </span>
            로 증명합니다.
          </h1>

          {/* Sub Copy */}
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
            한국산업규격 <strong className="text-white">KS F 4004(벽돌)</strong> ·{" "}
            <strong className="text-white">KS F 4002(C종 블록)</strong> 인증 및 환경부 친환경 자원순환
            환경표지 획득. 조달청 나라장터 공공구매 다수공급자계약(MAS) 정품 제조 공장입니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14">
            <a
              href="#calculator"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5" />
              <span>간이 물량 계산기</span>
            </a>

            <a
              href="#products"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 backdrop-blur-md transition-all hover:border-slate-500"
            >
              <FileText className="w-5 h-5 text-slate-400" />
              <span>규격표 바로보기</span>
            </a>

            <a
              href={`tel:${companyData.tel}`}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-base border border-white/20 backdrop-blur-md transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{companyData.tel}</span>
            </a>
          </div>
        </div>

        {/* Key Metrics Counter Grid (SPEC.md requirement: 30+ Years, 2개 KS인증, 친환경인증 등) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80">
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-colors"
            >
              <div className="text-xs sm:text-sm text-slate-400 font-medium mb-1">
                {item.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {item.value}
                </span>
                <span className="text-sm sm:text-base font-bold text-red-400">
                  {item.unit}
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-2 line-clamp-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
