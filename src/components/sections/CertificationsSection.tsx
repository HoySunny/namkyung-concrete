"use client";

import React, { useState, useEffect } from "react";
import { certificationsData, CertificationItem } from "@/data/certifications";
import { companyData } from "@/data/company";
import SmartImage from "@/components/common/SmartImage";
import { ShieldCheck, Award, FileCheck, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "@/config/theme";

// Mini Carousel Subcomponent for individual certificate cards
function CertCardImage({
  cert,
  onSelect,
}: {
  cert: CertificationItem;
  onSelect: (cert: CertificationItem, pageIndex: number) => void;
}) {
  const images = cert.images && cert.images.length > 0 ? cert.images : [cert.imageSrc];
  const [activeIndex, setActiveIndex] = useState(0);
  const isMulti = images.length > 1;

  // Auto crossfade every 3.5s if multiple images exist
  useEffect(() => {
    if (!isMulti) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isMulti, images.length]);

  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-white group/slider">
      {/* Image container with 3:4 aspect ratio */}
      <div
        className="relative aspect-[3/4] cursor-pointer"
        onClick={() => onSelect(cert, activeIndex)}
      >
        {images.map((imgSrc, idx) => (
          <div
            key={imgSrc}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <SmartImage
              src={imgSrc}
              alt={`${cert.title} - ${idx + 1}`}
              title={cert.title}
              subtitle={cert.imageLabels?.[idx] || cert.certNumber}
              category="cert"
              aspectRatio="aspect-[3/4]"
              className="w-full h-full object-cover group-hover/slider:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Top Left Badge */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/85 text-white backdrop-blur-sm border border-white/20">
          {cert.badge}
        </span>
      </div>

      {/* Bottom Right Multiple Indicator & Manual Toggle Tabs */}
      {isMulti && (
        <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 bg-slate-900/85 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20 shadow-md">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(idx);
              }}
              className={`px-1.5 py-0.5 text-[10px] font-bold rounded transition-all ${
                idx === activeIndex
                  ? "bg-red-600 text-white shadow"
                  : "text-slate-300 hover:text-white hover:bg-white/20"
              }`}
              title={`${idx + 1}번 인증서 보기`}
            >
              {idx + 1}
            </button>
          ))}
          <span className="text-[10px] text-slate-300 font-medium pl-0.5">
            {cert.imageLabels?.[activeIndex]?.includes("벽돌")
              ? "벽돌"
              : cert.imageLabels?.[activeIndex]?.includes("블록")
              ? "블록"
              : `${activeIndex + 1}/${images.length}`}
          </span>
        </div>
      )}
    </div>
  );
}

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [modalPageIndex, setModalPageIndex] = useState<number>(0);

  const handleOpenModal = (cert: CertificationItem, pageIndex: number = 0) => {
    setSelectedCert(cert);
    setModalPageIndex(pageIndex);
  };

  const modalImages = selectedCert
    ? selectedCert.images && selectedCert.images.length > 0
      ? selectedCert.images
      : [selectedCert.imageSrc]
    : [];

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
              {/* Interactive Certificate Image with Mini Carousel */}
              <CertCardImage cert={cert} onSelect={handleOpenModal} />

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
                    onClick={() => handleOpenModal(cert, 0)}
                    className="w-full py-2 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>인증서 크게 보기</span>
                    {cert.images && cert.images.length > 1 && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-red-100 text-red-600">
                        2종
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Public Procurement MAS Banner */}
        <div className={`p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border ${
          theme.isLight
            ? "bg-blue-50/70 border-blue-200 text-slate-900 shadow-sm"
            : "bg-slate-900 text-white border-slate-800 shadow-xl"
        }`}>
          <div className="space-y-2 text-center md:text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
              theme.isLight
                ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                : "bg-emerald-950 text-emerald-400 border-emerald-800"
            }`}>
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>조달청 나라장터 종합쇼핑몰 다수공급자계약(MAS) 업체</span>
            </div>
            <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${theme.isLight ? "text-slate-950" : "text-white"}`}>
              공공기관 및 관급 현장 납품 서류 완비
            </h3>
            <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${theme.isLight ? "text-slate-700" : "text-slate-400"}`}>
              KS 시험성적서, 환경표지 인증서, 직접생산확인증명서, 사업자등록증, 국세·지방세 완납증명서 등
              관급 공사 계약에 필요한 모든 증빙 서류를 출하 시 신속히 발행해 드립니다.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="tel:055-582-4346"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all"
            >
              <span>시험성적서/서류 요청 문의 (055-582-4346~7)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Certificate View with multi-page support */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-20"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4 pr-10">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                {selectedCert.badge}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1 leading-snug">
                {selectedCert.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {selectedCert.agency} | {selectedCert.certNumber}
              </p>
            </div>

            {/* Multiple Certificate Page Toggle in Modal */}
            {modalImages.length > 1 && (
              <div className="flex items-center gap-2 mb-3 bg-slate-100 p-1.5 rounded-xl">
                {modalImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalPageIndex(idx)}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                      modalPageIndex === idx
                        ? "bg-red-600 text-white shadow-sm"
                        : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {selectedCert.imageLabels?.[idx] || `${idx + 1}페이지`}
                  </button>
                ))}
              </div>
            )}

            {/* Certificate Image Frame */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 mb-4 bg-slate-100 relative">
              <SmartImage
                key={modalImages[modalPageIndex]}
                src={modalImages[modalPageIndex]}
                alt={`${selectedCert.title} - ${modalPageIndex + 1}`}
                title={selectedCert.title}
                subtitle={selectedCert.imageLabels?.[modalPageIndex] || selectedCert.certNumber}
                category="cert"
                aspectRatio="aspect-[3/4]"
                className="w-full"
                priority={true}
              />

              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setModalPageIndex(
                        (prev) => (prev - 1 + modalImages.length) % modalImages.length
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-sm transition-all"
                    aria-label="이전 인증서"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setModalPageIndex((prev) => (prev + 1) % modalImages.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-sm transition-all"
                    aria-label="다음 인증서"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {selectedCert.description}
            </p>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              창 닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
