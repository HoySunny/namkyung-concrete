"use client";

import React, { useState } from "react";
import { certificationsData, CertificationItem } from "@/data/certifications";
import SmartImage from "@/components/common/SmartImage";
import { ShieldCheck, Award, FileCheck, CheckCircle2, X, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white text-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Trust & Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-4">
            공식 인증 및 공신력 증명
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            남경콘크리트(주)의 모든 제품은 국가산업표준 KS 인증 및 환경부 친환경 표지 인증을 획득하였으며,
            중소벤처기업부 직접생산확인을 통해 공공기관 및 관급 현장에 신뢰로 납품됩니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Certificate Image Frame */}
              <div
                className="relative cursor-pointer overflow-hidden border-b border-slate-200 bg-white"
                onClick={() => setSelectedCert(cert)}
              >
                <SmartImage
                  src={cert.imageSrc}
                  alt={cert.title}
                  title={cert.title}
                  subtitle={cert.certNumber}
                  category="cert"
                  aspectRatio="aspect-[3/4]"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/20">
                    {cert.badge}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-mono block mb-1">
                    {cert.agency}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-white p-3 rounded-xl border border-slate-200/80">
                    <div>
                      <span className="text-slate-400 block text-[11px]">인증번호</span>
                      <strong className="text-slate-800 font-mono">{cert.certNumber}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">적용 대상</span>
                      <span className="text-slate-700">{cert.targetItems}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">취득 시기</span>
                      <span className="text-slate-700 font-medium">{cert.certDate}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition-colors"
                  >
                    인증서 크게 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Public Procurement MAS Banner */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>조달청 나라장터 종합쇼핑몰 다수공급자계약(MAS) 업체</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              공공기관 및 관급 현장 납품 서류 완비
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              KS 시험성적서, 환경표지 인증서, 직접생산확인증명서, 사업자등록증, 국세·지방세 완납증명서 등
              관급 공사 계약에 필요한 모든 증빙 서류를 출하 시 신속히 발행해 드립니다.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={`tel:${certificationsData[0].certNumber ? "055-582-4347" : ""}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all"
            >
              <span>시험성적서/서류 요청 문의</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Certificate View */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                {selectedCert.badge}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                {selectedCert.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {selectedCert.agency} | {selectedCert.certNumber}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 mb-4 bg-slate-100">
              <SmartImage
                src={selectedCert.imageSrc}
                alt={selectedCert.title}
                title={selectedCert.title}
                subtitle={selectedCert.certNumber}
                category="cert"
                aspectRatio="aspect-[3/4]"
                className="w-full"
              />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {selectedCert.description}
            </p>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
            >
              창 닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
