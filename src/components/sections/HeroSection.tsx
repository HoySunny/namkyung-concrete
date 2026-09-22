"use client";

import React from "react";
import Image from "next/image";
import { Phone, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-slate-100">
      {/* 1. Full-bleed Background Image with architectural grid pattern & radial vignette */}
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
        {/* 1) 건축/설계 도면 도트/그리드 패턴 레이어 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        {/* 2) 중앙 텍스트 집중형 소프트 비네팅 레이어 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.2)_60%,transparent_100%)] pointer-events-none" />
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-slate-800 font-bold text-3xl sm:text-5xl leading-snug tracking-normal">
          30년 업력의 기술,
          <br />
          정직한 품질로 증명합니다.
        </h1>

        {/* Subtext */}
        <p className="text-slate-600 font-normal text-base sm:text-lg mt-4 tracking-normal">
          경남 함안 본사 공장 직영 · 속빈콘크리트블록 및 콘크리트 벽돌 영남권 신속 배차
        </p>

        {/* Button Group */}
        <div className="mt-8 flex flex-row justify-center items-center gap-3">
          {/* 1) 전화문의 */}
          <a
            href="tel:055-582-4346"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>전화문의</span>
          </a>

          {/* 2) 카달로그 */}
          <a
            href="/docs/catalog.pdf"
            download="남경콘크리트 카달로그.pdf"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium px-6 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 text-sm sm:text-base"
          >
            <Download className="w-4 h-4 text-slate-700" />
            <span>카달로그</span>
          </a>
        </div>
      </div>
    </section>
  );
}
