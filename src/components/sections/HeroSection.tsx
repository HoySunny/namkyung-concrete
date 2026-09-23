"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const PHRASES = [
  "30년의 단단한 기초",
  "정직한 품질로 증명합니다",
  "남경콘크리트 (주)",
];

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const currentFullText = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (currentText.length < currentFullText.length) {
      // 한 글자씩 타이핑
      timer = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, 80);
    } else {
      // 문구 완성 후 대기: 3번 문구는 4초간 유지, 1·2번 문구는 1.5초 유지 후 지우는 모션 없이 바로 다음 문구로 전환
      const pauseDuration = phraseIndex === 2 ? 4000 : 1500;
      timer = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        setCurrentText("");
      }, pauseDuration);
    }

    return () => clearTimeout(timer);
  }, [currentText, phraseIndex]);

  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-slate-100 px-4">
      {/* 1. Full-bleed Background Image (가림 없이 맑고 넓게 완전 개방) */}
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

      {/* 2. 중앙 플로팅 글래스 캡슐 (초기 슬림 비율 복원 + 노-딜리트 타이핑 루프) */}
      <div className="relative z-10 w-full px-4 flex justify-center">
        <div className="w-[92%] max-w-4xl h-[56px] sm:h-[62px] mx-auto rounded-full bg-white/80 backdrop-blur-md border border-white/70 shadow-xl flex items-center justify-center px-8 overflow-hidden">
          <div className="flex items-center justify-center w-full text-center">
            <h1 className="text-slate-800 font-bold text-base sm:text-lg tracking-normal whitespace-nowrap flex items-center justify-center">
              {phraseIndex === 2 && (
                <Image
                  src="/pic/logo/symbol.png"
                  alt="남경콘크리트 심볼"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain mr-2 shrink-0 animate-in fade-in duration-300"
                />
              )}
              <span>{currentText}</span>
              <span
                className="inline-block w-[2px] h-4 sm:h-5 ml-1 bg-red-600 animate-pulse"
                aria-hidden="true"
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
