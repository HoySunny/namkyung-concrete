import React from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import { Phone, Printer, MapPin, Building, ShieldCheck, Award, Lock } from "lucide-react";
import { theme } from "@/config/theme";

export default function Footer() {
  return (
    <footer className={theme.footer.wrapper}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/pic/logo/symbol.png"
                  alt="남경콘크리트 심볼"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain rounded-lg shadow-sm"
                />
              </div>
              <span className={`font-extrabold text-xl tracking-tight ${theme.footer.brandTitle}`}>
                남경콘크리트<span className="text-red-500">(주)</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-sm ${theme.footer.subText}`}>
              1991년 창립 이래 30여 년간 정직한 품질과 엄격한 KS 국가표준으로 건설의 든든한 기초를
              다져온 콘크리트 2차 제품 및 골재·레미탈 전문 제조 공급 기업입니다.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${theme.footer.badge}`}>
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                KS F 4004 (벽돌)
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${theme.footer.badge}`}>
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                KS F 4002 (C종 블록)
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${theme.footer.badge}`}>
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                환경부 환경표지 인증
              </span>
            </div>
          </div>

          {/* Quick Contact & Operation Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className={theme.footer.heading}>
              고객 상담 및 출하 배차
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="mb-1">
                    <span className="text-[11px] text-red-500 font-semibold block">빠른 견적 / 출하 배차 직통</span>
                    <a
                      href="tel:055-582-4346"
                      className={theme.footer.phone}
                    >
                      TEL 055-582-4346~7
                    </a>
                  </div>
                  <p className={`text-xs ${theme.footer.subText}`}>직통 팩스: {companyData.fax}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                <p className={`text-xs ${theme.footer.subText}`}>
                  출하 시간: 평일 07:00 ~ 18:00 (토·일·공휴일 현장 협의 배차 가능)
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                <p className={`text-xs ${theme.footer.subText}`}>
                  {companyData.address} {companyData.addressDetail}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery & Procurement Note */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={theme.footer.heading}>
              배차 인도 원칙
            </h4>
            <div className={theme.footer.box}>
              <p className={theme.footer.boxHeading}>
                납품장소 차상도(車上渡) 인도 원칙
              </p>
              <p className="leading-relaxed">
                운송 차량 도착 후 화물 적재함 위에서 인계하며, 현장 지게차/크레인 하차 조건 또는 대형 화물(25t/15t/5t) 연계 배차가 지원됩니다.
              </p>
              <p className="text-[11px] text-red-600 font-medium">
                * 조달청 나라장터 공공구매 다수공급자계약(MAS) 등록업체
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Legal & Privacy Policy Footer */}
        <div className={`mt-12 pt-8 ${theme.footer.legalBorder}`}>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 leading-relaxed">
            <span><strong>상호명:</strong> {companyData.name}</span>
            <span><strong>대표자:</strong> {companyData.ceo}</span>
            <span><strong>사업자등록번호:</strong> {companyData.businessNumber}</span>
            <span><strong>소재지:</strong> {companyData.address}</span>
            <span>
              <strong>연락처:</strong>{" "}
              <a href="tel:055-582-4346" className="hover:underline underline-offset-2">
                TEL {companyData.tel}
              </a>{" "}
              / FAX {companyData.fax}
            </span>
            <span>
              <strong>개인정보보호책임자:</strong> 조재완 (관리부 /{" "}
              <a
                href="mailto:namkyung89@naver.com"
                className="hover:underline underline-offset-2"
              >
                namkyung89@naver.com
              </a>
              )
            </span>
          </div>

          {/* 개인정보처리방침 요약 공지 */}
          <div className={theme.footer.privacyBox}>
            <Lock className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
            <p>
              <strong className="mr-1">[개인정보처리방침 요약]</strong>
              온라인 견적 문의 시 수집되는 개인정보(성함, 연락처, 현장주소)는 견적 상담 목적 이외의 용도로 사용되지 않으며, 상담 완료 후 1년간 보관 후 안전하게 파기됩니다.
            </p>
          </div>

          <p className="pt-1 text-[11px] opacity-80">
            Copyright © {new Date().getFullYear()} {companyData.nameEn} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
