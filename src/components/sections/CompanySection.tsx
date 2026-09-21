"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { historyTimeline } from "@/data/history";
import { Building2, ShieldCheck, Truck, CheckCircle, Calendar, Sparkles } from "lucide-react";

export default function CompanySection() {
  const [showFullHistory, setShowFullHistory] = useState(false);

  const visibleHistory = showFullHistory ? historyTimeline : historyTimeline.slice(0, 6);

  const strengths = [
    {
      icon: <Building2 className="w-6 h-6 text-red-600" />,
      title: "30년 축적된 콘크리트 제조 기술력",
      desc: "1991년 창립 이래 자동화 배치플랜트와 정밀 몰드 성형, 고온 증기양생 공정을 통해 오차 없는 균일한 고강도 제품을 생산합니다.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      title: "KS 규격 및 친환경 환경표지 공인",
      desc: "KS F 4004(벽돌), KS F 4002(블록) 인증을 30년 가까이 유지하고 있으며, 자원순환 환경표지와 중기부 직접생산확인을 획득했습니다.",
    },
    {
      icon: <Truck className="w-6 h-6 text-red-600" />,
      title: "자재 일괄 배차 원스톱 공급망",
      desc: "블록·벽돌뿐만 아니라 친모래, 톤백모래, 석분, 자갈, 레미탈, 특수시멘트까지 공사 현장에 맞춰 대형 덤프 및 화물차로 일괄 차상도 인도합니다.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Company Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            건축과 토목의 안전을 책임지는
            <br />
            <span className="text-red-600">남경콘크리트(주)</span>입니다
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            1991년 경남 함안 대송리에 둥지를 튼 이래, 30여 년간 오직 단단한 건축의 기초가 되는
            콘크리트 2차 제품을 정직하고 묵묵하게 생산해 왔습니다.
          </p>
        </div>

        {/* 3 Core Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-200 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Company Overview Table & Message */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-red-400 tracking-wider uppercase">
                CEO Message & Commitment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                "보이지 않는 벽체 속에서도
                <br />
                타협 없는 강도로 답합니다."
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                콘크리트 제품은 시공 후 마감재 뒤로 가려지지만, 건축물의 수명과 안전을 영구히
                지탱하는 핵심 골조입니다. 남경콘크리트는 규격과 강도에 한 치의 거짓 없는 정품만을
                출하할 것을 약속드립니다.
              </p>
              <div className="pt-2 text-slate-300 text-sm">
                <span className="font-semibold text-white">대표이사</span> {companyData.ceo}
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-800/80 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-sm font-bold text-slate-300 border-b border-slate-700 pb-3 mb-4">
                기업 기본 정보 요약
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block mb-0.5">회사명</span>
                  <span className="font-semibold text-white">{companyData.name} ({companyData.nameEn})</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">설립일</span>
                  <span className="font-semibold text-white">{companyData.establishedDate}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">사업자등록번호</span>
                  <span className="font-semibold text-white font-mono">{companyData.businessNumber}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">납품 원칙</span>
                  <span className="font-semibold text-red-400">차상도 인도 원칙 (화물 배차 연계)</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-slate-400 block mb-0.5">본사 및 공장 소재지</span>
                  <span className="font-semibold text-white">
                    {companyData.address} {companyData.addressDetail}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              주요 연혁 (History Timeline)
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              30여 년을 이어온 품질 혁신과 공공 조달 신뢰의 발자취
            </p>
          </div>

          <div className="relative border-l-2 border-red-200 ml-4 sm:ml-32 space-y-8 py-4">
            {visibleHistory.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    item.highlight
                      ? "bg-red-600 border-white shadow-md shadow-red-500/50"
                      : "bg-white border-red-400"
                  }`}
                />

                {/* Date on left for desktop */}
                <div className="sm:absolute sm:-left-32 sm:top-1 sm:w-24 sm:text-right text-xs sm:text-sm font-bold font-mono text-red-600">
                  {item.year}.{item.month || "00"}
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    {item.highlight && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-red-100 text-red-700">
                        주요실적
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle All History */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowFullHistory(!showFullHistory)}
              className="px-5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {showFullHistory ? "연혁 간략히 보기" : "전체 연혁 펼쳐보기 (+)"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
