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
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 90);
      } else {
        // 문구 완성 후 대기: 3번 문구는 4.5초간 유지, 1·2번 문구는 1.5초 대기
        const pauseDuration = phraseIndex === 2 ? 4500 : 1500;
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

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

      {/* 2. 중앙 플로팅 글래스 캡슐 (완전 고정 규격 + 3단 순환 타이핑 모션) */}
      <div className="relative z-10 w-full px-4 flex justify-center">
        <div className="w-[90%] max-w-[560px] h-[64px] sm:h-[72px] mx-auto rounded-full bg-white/85 backdrop-blur-md border border-white/80 shadow-2xl flex items-center justify-center px-6 overflow-hidden">
          <div className="flex items-center justify-center w-full text-center">
            <h1 className="text-slate-900 font-extrabold text-lg sm:text-2xl tracking-tight whitespace-nowrap flex items-center justify-center">
              {phraseIndex === 2 && (
                <Image
                  src="/pic/logo/symbol.png"
                  alt="남경콘크리트 심볼"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain mr-2 sm:mr-2.5 shrink-0 animate-in fade-in duration-300"
                />
              )}
              <span>{currentText}</span>
              <span
                className="inline-block w-[2px] h-5 sm:h-6 ml-1.5 bg-red-600 animate-pulse"
                aria-hidden="true"
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
