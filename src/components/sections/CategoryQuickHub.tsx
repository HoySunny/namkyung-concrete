"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Layers, Box, Package, Truck, ShieldCheck, Sparkles } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  sub: string;
  specs: string;
  tag: string;
  imageSrc: string;
  icon: React.ElementType;
}

const categories: CategoryItem[] = [
  {
    id: "brick",
    name: "콘크리트 벽돌 (기본 2종)",
    sub: "조적용 표준 벽돌 / 건축 내·외벽",
    specs: "190×90×57mm · 파레트 960장",
    tag: "KS F 4004 · 환경표지",
    imageSrc: "/pic/products/brick-standard.jpg",
    icon: Layers,
  },
  {
    id: "block-4",
    name: "4인치 속빈블록 (100mm)",
    sub: "실내 칸막이벽 / 경량 구획벽",
    specs: "100×190×390mm · 파레트 144장",
    tag: "KS F 4002 C종",
    imageSrc: "/pic/products/block-4inch.jpg",
    icon: Box,
  },
  {
    id: "block-6",
    name: "6인치 속빈블록 (150mm)",
    sub: "건축 표준 외벽체 / 창고·공장벽",
    specs: "150×190×390mm · 파레트 96장",
    tag: "KS F 4002 C종",
    imageSrc: "/pic/products/block-6inch.jpg",
    icon: Box,
  },
  {
    id: "block-8",
    name: "8인치 속빈블록 (190mm)",
    sub: "중량 구조체 / 방음벽 / 지하벽체",
    specs: "190×190×390mm · 파레트 72장",
    tag: "KS F 4002 C종",
    imageSrc: "/pic/products/block-8inch.jpg",
    icon: Box,
  },
  {
    id: "block-variant",
    name: "이형 블록 (마무리 / U형)",
    sub: "창호 모서리 마감 및 수평 철근 보강",
    specs: "온마무리 · 반마무리 · 가로근용 U형",
    tag: "조적 마감재",
    imageSrc: "/pic/products/block-variant.jpg",
    icon: Package,
  },
  {
    id: "materials",
    name: "친모래 · 골재 · 레미탈",
    sub: "블록·벽돌과 함께 덤프 현장 일괄 직송",
    specs: "세척사 · 톤백 · 자갈 · 석분 · 시멘트",
    tag: "원스톱 배차",
    imageSrc: "/pic/products/block-retaining-wall.jpg",
    icon: Truck,
  },
];

export default function CategoryQuickHub() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>주력 제조 & 공급 제품군</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              제품 카테고리 퀵 허브
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              원하시는 품목을 선택하시면 세부 제원표 및 조달청 식별번호를 바로 확인하실 수 있습니다.
            </p>
          </div>
          <a
            href="#products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-700 hover:text-blue-900 group"
          >
            <span>전체 규격 제원표 보기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6-Card Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col group"
            >
              {/* Thumbnail with overlay badge */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={cat.imageSrc}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-blue-800 shadow-sm border border-blue-200">
                  {cat.tag}
                </span>
              </div>

              {/* Text info */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {cat.sub}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-600 truncate">
                    {cat.specs.split("·")[0]}
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
