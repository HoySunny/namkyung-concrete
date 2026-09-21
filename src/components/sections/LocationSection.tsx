"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import {
  MapPin,
  Phone,
  Truck,
  Send,
  CheckCircle2,
  ExternalLink,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function LocationSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    companyOrName: "",
    phone: "",
    deliveryAddress: "",
    productInterest: "6인치 속빈블록 (NK-HB150)",
    quantity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "118f8f0f-cef4-42f8-b34e-f0704e803551",
          subject: "[남경콘크리트 홈페이지] 새로운 견적/상담 문의가 접수되었습니다.",
          from_name: "남경콘크리트 웹사이트 알림",
          name: formData.companyOrName,
          phone: formData.phone,
          address: formData.deliveryAddress,
          products: `${formData.productInterest}${
            formData.quantity ? ` (수량: ${formData.quantity})` : ""
          }`,
          message: formData.message || "추가 요청사항 없음",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(
          result.message || "문의 전송 중 오류가 발생했습니다. 대표 전화로 직접 문의해 주십시오."
        );
      }
    } catch (err: any) {
      setErrorMessage(
        "네트워크 연결 오류로 접수되지 않았습니다. 인터넷 상태를 확인하시거나 대표전화(055-582-4347)로 연락 부탁드립니다."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setErrorMessage(null);
    setFormData({
      companyOrName: "",
      phone: "",
      deliveryAddress: "",
      productInterest: "6인치 속빈블록 (NK-HB150)",
      quantity: "",
      message: "",
    });
  };

  // Naver & Kakao map direct search URLs
  const encodedAddress = encodeURIComponent("경상남도 함안군 법수면 대송로 290");
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodedAddress}`;
  const naverMapUrl = `https://map.naver.com/v5/search/${encodedAddress}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-100 text-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
            Location & Dispatch Inquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-4">
            오시는 길 및 출하 · 견적 문의
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            경남 함안 대송리 대규모 공장에서 남해고속도로 및 중부내륙고속도로와 바로 연계되어
            영남 전역(경남, 부산, 울산, 대구·경북) 현장으로 신속하게 직배송됩니다.
          </p>
        </div>

        {/* 2 Column Layout: Location/Map on Left, Quote Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Location, Map & Dispatch Guide */}
          <div className="lg:col-span-6 space-y-6">
            {/* Map Frame */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>남경콘크리트(주) 공장 및 본사</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {companyData.address} {companyData.addressDetail}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-red-50 text-red-700">
                  직접방문 환영
                </span>
              </div>

              {/* Styled Interactive/Visual Map Area */}
              <div className="relative h-64 sm:h-72 bg-slate-200 overflow-hidden flex items-center justify-center">
                {/* Visual Map Representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
                  {/* Road Grid lines */}
                  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  {/* Highway simulation */}
                  <div className="absolute top-1/2 left-0 right-0 h-4 bg-amber-200/80 -translate-y-2 border-y border-amber-300 transform -rotate-6" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-slate-300/80 -translate-x-3 border-x border-slate-400 transform rotate-12" />
                </div>

                {/* Central Location Pin Card */}
                <div className="relative z-10 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200 text-center max-w-xs mx-auto animate-pulse">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-2 shadow-lg shadow-red-600/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    남경콘크리트(주)
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    경남 함안군 법수면 대송로 290
                  </p>
                  <p className="text-[10px] text-red-600 font-semibold mt-1">
                    대형 덤프 / 트레일러 진입 완비
                  </p>
                </div>
              </div>

              {/* Navigation Map App Links */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-slate-500 font-medium">지도 앱 바로 연결:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={kakaoMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FEE500] hover:bg-[#FADA0A] text-slate-900 text-xs font-bold transition-colors"
                  >
                    <span>카카오맵</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={naverMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#03C75A] hover:bg-[#02B350] text-white text-xs font-bold transition-colors"
                  >
                    <span>네이버지도</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Truck Dispatch & Access Guide */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-red-400">
                <Truck className="w-5 h-5" />
                <h4 className="font-bold text-base text-white">
                  대형 화물차 진입 경로 및 차상도 인도 안내
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>진입로 규격:</strong> 남해고속도로 함안IC / 군북IC에서 10~15분 거리, 왕복 2차선 대송로 인접으로 <strong>25톤 덤프 및 대형 카고 트럭</strong>의 교행과 회차가 원활합니다.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>차상도(車上渡) 원칙:</strong> 납품 장소 화물 적재함 위에서 인수인계하는 조건이며, 현장 하차를 위한 지게차 또는 크레인은 현장에서 준비해 주셔야 합니다 (필요시 배차 전 사전 조율).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span>
                    <strong>직통 유선 번호:</strong> 055-582-4347 / 055-582-4346 (팩스 055-582-4349)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Quick Quotation Form with Web3Forms */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                Fast Online Quotation
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                빠른 온라인 견적 및 배차 문의
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                필요 품목과 현장 위치를 남겨주시면 당사 담당자가 최단 시간 내 정확한 공장도가 단가 및 운송료를 안내해 드립니다.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  견적 문의가 정상 접수되었습니다.
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  담당자가 확인 후 기재해 주신 연락처(<strong>{formData.phone || "연락처"}</strong>)로 신속히 연락드리겠습니다.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    추가 문의 작성하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-2.5 text-xs">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1.5">
                      상호명 / 성함 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.companyOrName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyOrName: e.target.value })
                      }
                      placeholder="예: (주)한국건설 / 김소장"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1.5">
                      연락처 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="예: 010-1234-5678"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    납품 현장 주소 (시·군·구·면) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.deliveryAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, deliveryAddress: e.target.value })
                    }
                    placeholder="예: 경남 창원시 마산회원구 내서읍 현장"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1.5">
                      주요 문의 품목
                    </label>
                    <select
                      name="product"
                      value={formData.productInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, productInterest: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                    >
                      <option value="기본 2종 콘크리트 벽돌 (KS F 4004)">
                        기본 2종 콘크리트 벽돌 (KS F 4004)
                      </option>
                      <option value="4인치 속빈블록 (NK-HB100)">
                        4인치 속빈블록 (NK-HB100)
                      </option>
                      <option value="6인치 속빈블록 (NK-HB150)">
                        6인치 속빈블록 (NK-HB150)
                      </option>
                      <option value="8인치 속빈블록 (NK-HB190)">
                        8인치 속빈블록 (NK-HB190)
                      </option>
                      <option value="이형 블록 (온마무리/반마무리/U형)">
                        이형 블록 (온마무리/반마무리/U형)
                      </option>
                      <option value="호안옹벽블록 / 경량인방">
                        호안옹벽블록 / 경량인방
                      </option>
                      <option value="친모래 / 골재 / 레미탈 일괄배차">
                        친모래 / 골재 / 레미탈 일괄배차
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1.5">
                      예상 필요 수량 (장 / 파레트 / 루베)
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      placeholder="예: 20파레트 / 약 2,000장"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1.5">
                    현장 하차 조건 및 추가 요청사항
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="현장 진입로 특이사항(5톤/25톤 진입 가능 여부, 지게차 보유 여부, 납기 희망일 등)"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-bold text-base shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>견적 문의 전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>무료 견적 및 배차 상담 접수</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>급하신 견적은 전화 주시면 즉시 상담 가능합니다.</span>
              <a
                href={`tel:${companyData.tel}`}
                className="font-bold text-red-600 hover:underline"
              >
                {companyData.tel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
