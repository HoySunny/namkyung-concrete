"use client";

import React from "react";
import Image from "next/image";
import { Phone, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-slate-100">
      {/* 1. Full-bleed Background Image with single full-screen 50% white overlay */}
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
        {/* 전체 화면을 덮는 단일 화이트 반투명 오버레이 */}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* 2. Hero Content (중앙 박스 및 backdrop-filter 완전 제거, 자연스러운 중앙 정렬) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-normal sm:tracking-wide leading-relaxed drop-shadow-sm">
          30년 업력의 기술,
          <br />
          정직한 품질로 증명합니다.
        </h1>

        {/* Subtext */}
        <p className="text-slate-600 font-normal text-base sm:text-lg mt-5 tracking-wide max-w-2xl leading-relaxed">
          경남 함안 본사 공장 직영 · 속빈콘크리트블록 및 콘크리트 벽돌 영남권 신속 배차
        </p>

        {/* Button Group */}
        <div className="mt-8 flex flex-row justify-center items-center gap-4">
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
