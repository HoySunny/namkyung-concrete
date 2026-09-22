"use client";

import React from "react";
import Image from "next/image";
import { Phone, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[78vh] lg:min-h-[84vh] flex items-center overflow-hidden bg-slate-900">
      {/* 1. Full-bleed Background Image with subtle bg-black/30 overlay (추후 <video> 삽입 대비) */}
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
        {/* 은은한 어둠만 주어(bg-black/30) 사진/영상의 본래 색감을 100% 보존 */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Hero Content Container (넓고 시원한 여백, 웅장한 텍스트와 최소 CTA) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
        <div className="max-w-3xl">
          {/* Main Title */}
          <h1 className="text-white font-extrabold text-3xl sm:text-5xl drop-shadow-lg leading-tight sm:leading-tight">
            30년 업력의 기술,
            <br />
            정직한 품질로 증명합니다.
          </h1>

          {/* Subtext (한 줄) */}
          <p className="text-white/90 text-base sm:text-lg mt-4 font-medium drop-shadow-md">
            경남 함안 본사 공장 직영 · 콘크리트 벽돌 및 속빈블록 영남권 신속 배차
          </p>

          {/* 2 Minimal CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            {/* 1) 전화문의 */}
            <a
              href="tel:055-582-4346"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-red-600/30 transition-all active:scale-95 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>전화문의</span>
            </a>

            {/* 2) 카달로그 */}
            <a
              href="/docs/catalog.pdf"
              download="남경콘크리트 카달로그.pdf"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/50 text-white hover:bg-white/30 px-6 py-3 rounded-lg shadow-md transition-all active:scale-95 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 text-white" />
              <span>카달로그</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
