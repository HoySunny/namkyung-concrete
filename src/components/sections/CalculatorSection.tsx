"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  RotateCcw,
  Truck,
  AlertCircle,
  Phone,
  Send,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { companyData } from "@/data/company";
import { theme } from "@/config/theme";

interface CalcItem {
  id: string;
  name: string;
  shortName: string;
  sub: string;
  piecesPerM2: number;
  palletSize: number;
  weightPerUnit: number; // kg
}

const calcProducts: CalcItem[] = [
  {
    id: "brick-05b",
    name: "콘크리트 벽돌 (0.5B 쌓기)",
    shortName: "벽돌 0.5B (두께 90mm)",
    sub: "두께 90mm 단벽 / 1㎡ 당 75장",
    piecesPerM2: 75,
    palletSize: 960,
    weightPerUnit: 1.95,
  },
  {
    id: "brick-10b",
    name: "콘크리트 벽돌 (1.0B 쌓기)",
    shortName: "벽돌 1.0B (두께 190mm)",
    sub: "두께 190mm 내력벽 / 1㎡ 당 149장",
    piecesPerM2: 149,
    palletSize: 960,
    weightPerUnit: 1.95,
  },
  {
    id: "block-4inch",
    name: "4인치 속빈블록 (NK-HB100)",
    shortName: "4인치 블록 (100mm)",
    sub: "두께 100mm 칸막이벽 / 1㎡ 당 12.5장",
    piecesPerM2: 12.5,
    palletSize: 144,
    weightPerUnit: 10.5,
  },
  {
    id: "block-6inch",
    name: "6인치 속빈블록 (NK-HB150)",
    shortName: "6인치 블록 (150mm)",
    sub: "두께 150mm 일반벽체 / 1㎡ 당 12.5장",
    piecesPerM2: 12.5,
    palletSize: 96,
    weightPerUnit: 14.5,
  },
  {
    id: "block-8inch",
    name: "8인치 속빈블록 (NK-HB190)",
    shortName: "8인치 블록 (190mm)",
    sub: "두께 190mm 중량벽체 / 1㎡ 당 12.5장",
    piecesPerM2: 12.5,
    palletSize: 72,
    weightPerUnit: 18.0,
  },
];

export default function CalculatorSection() {
  // Calculator States
  const [inputMode, setInputMode] = useState<"dimension" | "area">("dimension");
  const [width, setWidth] = useState<string>("10");
  const [height, setHeight] = useState<string>("2.8");
  const [areaInput, setAreaInput] = useState<string>("28");
  const [selectedProductId, setSelectedProductId] = useState<string>("block-6inch");
  const [lossRate, setLossRate] = useState<number>(5);

  // Form States (Integrated One-Touch Quote)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [botcheck, setBotcheck] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showPrivacyDetail, setShowPrivacyDetail] = useState(false);
  const [formData, setFormData] = useState({
    companyOrName: "",
    phone: "",
    deliveryAddress: "",
    message: "",
  });

  // Area calculation
  const totalArea = useMemo(() => {
    if (inputMode === "dimension") {
      const w = parseFloat(width) || 0;
      const h = parseFloat(height) || 0;
      return Math.max(0, w * h);
    } else {
      return Math.max(0, parseFloat(areaInput) || 0);
    }
  }, [inputMode, width, height, areaInput]);

  const selectedProduct = useMemo(() => {
    return calcProducts.find((p) => p.id === selectedProductId) || calcProducts[3];
  }, [selectedProductId]);

  // Calculation Results
  const results = useMemo(() => {
    const netPieces = Math.ceil(totalArea * selectedProduct.piecesPerM2);
    const totalPiecesWithLoss = Math.ceil(netPieces * (1 + lossRate / 100));
    const palletsNeeded = Math.ceil(totalPiecesWithLoss / selectedProduct.palletSize);
    const fullPallets = Math.floor(totalPiecesWithLoss / selectedProduct.palletSize);
    const remainderPieces = totalPiecesWithLoss % selectedProduct.palletSize;
    const totalWeightKg = totalPiecesWithLoss * selectedProduct.weightPerUnit;
    const totalWeightTon = (totalWeightKg / 1000).toFixed(2);

    let truckRecommendation = "5톤 화물차 (1대)";
    if (parseFloat(totalWeightTon) > 18) {
      truckRecommendation = "25톤 대형 트레일러 / 덤프";
    } else if (parseFloat(totalWeightTon) > 9) {
      truckRecommendation = "15톤 ~ 18톤 대형 화물차";
    } else if (parseFloat(totalWeightTon) > 4) {
      truckRecommendation = "11톤 또는 5톤 화물차";
    }

    return {
      netPieces,
      totalPiecesWithLoss,
      palletsNeeded,
      fullPallets,
      remainderPieces,
      totalWeightTon,
      pyeong: (totalArea / 3.305785).toFixed(1),
      truckRecommendation,
    };
  }, [totalArea, selectedProduct, lossRate]);

  const handleReset = () => {
    setWidth("10");
    setHeight("2.8");
    setAreaInput("28");
    setLossRate(5);
  };

  // Form Submit Handler
  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // 1. 개인정보 동의 검증
    if (!privacyAgreed) {
      setErrorMessage("개인정보 수집 및 이용에 동의해 주셔야 견적 접수가 가능합니다.");
      setIsSubmitting(false);
      return;
    }

    // 2. 허니팟 봇 검사
    if (botcheck) {
      setTimeout(() => {
        setFormSubmitted(true);
        setIsSubmitting(false);
      }, 500);
      return;
    }

    // 3. 한국 전화번호 정규식 검사
    const phoneClean = formData.phone.trim().replace(/\s+/g, "");
    const phoneRegex = /^(01[016789]|02|0[3-6][1-5]|070)-?\d{3,4}-?\d{4}$/;
    if (!phoneRegex.test(phoneClean)) {
      setErrorMessage("올바른 연락처 형식(예: 010-1234-5678 또는 055-582-4347)을 입력해 주세요.");
      setIsSubmitting(false);
      return;
    }

    // 4. 악성 URL 검사
    const urlRegex = /(https?:\/\/|www\.)/i;
    if (urlRegex.test(formData.message) || urlRegex.test(formData.companyOrName) || urlRegex.test(formData.deliveryAddress)) {
      setErrorMessage("스팸 방지를 위해 상담 내용에 웹사이트 주소(http://, https://)를 포함할 수 없습니다.");
      setIsSubmitting(false);
      return;
    }

    const calculatedSummaryText = `${selectedProduct.name} (면적: ${totalArea.toFixed(1)}㎡ / ${results.pyeong}평) -> 예상 ${results.totalPiecesWithLoss.toLocaleString()}장 (${results.palletsNeeded}파레트, 약 ${results.totalWeightTon}톤)`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "118f8f0f-cef4-42f8-b34e-f0704e803551",
          subject: `[남경콘크리트 물량계산기 견적문의] ${formData.companyOrName || "고객님"}`,
          from_name: "남경콘크리트 계산기 알림",
          name: formData.companyOrName,
          phone: formData.phone,
          address: formData.deliveryAddress,
          products: calculatedSummaryText,
          message: formData.message || "추가 요청사항 없음",
          botcheck: botcheck,
          privacy_agreement: "동의완료 (성함/연락처/현장주소 1년 보관 후 파기)",
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(result.message || "문의 전송 중 오류가 발생했습니다. 대표 전화로 직접 문의해 주십시오.");
      }
    } catch (err: any) {
      setErrorMessage("네트워크 오류로 접수되지 않았습니다. 직통 전화(055-582-4346~7)로 연락 부탁드립니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className={`py-16 lg:py-24 scroll-mt-16 ${theme.calculator.sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${theme.calculator.badge}`}>
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            Smart Material Calculator & Quick Quote
          </span>
          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-3 ${theme.calculator.title}`}>
            자재 물량 계산 및 원터치 견적 신청
          </h2>
          <p className={`text-xs sm:text-base leading-relaxed ${theme.calculator.subCopy}`}>
            시공 면적을 입력하시면 소요 장수와 출하 파레트 수가 즉시 산출되며,
            우측 폼을 통해 산출된 내역 그대로 간편 견적을 요청하실 수 있습니다.
          </p>
        </div>

        {/* Compact 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Column 1 (Left): Smart Quantity Calculator */}
          <div className={`lg:col-span-6 ${theme.calculator.panelCard}`}>
            <div className={`flex items-center justify-between pb-3.5 ${theme.calculator.panelHeaderBorder}`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className={`text-base sm:text-lg font-bold ${theme.calculator.panelTitle}`}>
                  자재 소요량 & 파레트 간이 계산기
                </h3>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className={`text-xs flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${theme.calculator.resetBtn}`}
              >
                <RotateCcw className="w-3 h-3" />
                <span>초기화</span>
              </button>
            </div>

            {/* Product Selection Chips */}
            <div>
              <label className={`text-xs block mb-2 ${theme.calculator.label}`}>
                시공 품목 선택
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {calcProducts.map((p) => {
                  const isSelected = selectedProductId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProductId(p.id)}
                      className={`text-left p-2.5 rounded-xl border transition-all ${
                        isSelected
                          ? theme.calculator.productActive
                          : theme.calculator.productInactive
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{p.shortName}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                        1파레트: <strong className="text-blue-700">{p.palletSize}장</strong> ({p.weightPerUnit}kg/장)
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dimension / Area Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`text-xs ${theme.calculator.label}`}>면적 계산 방식</label>
                <div className="inline-flex rounded-lg p-1 text-xs border border-slate-200 bg-slate-100">
                  <button
                    type="button"
                    onClick={() => setInputMode("dimension")}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      inputMode === "dimension"
                        ? theme.calculator.tabActive
                        : theme.calculator.tabInactive
                    }`}
                  >
                    가로×높이(m)
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputMode("area")}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      inputMode === "area"
                        ? theme.calculator.tabActive
                        : theme.calculator.tabInactive
                    }`}
                  >
                    총 면적(㎡) 직접입력
                  </button>
                </div>
              </div>

              {inputMode === "dimension" ? (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[11px] text-slate-500 block mb-1">벽체 가로 (m)</span>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className={`w-full rounded-xl px-3.5 py-2.5 font-mono text-sm focus:outline-none border ${theme.calculator.inputField}`}
                        placeholder="예: 10"
                      />
                      <span className="absolute right-3 top-2.5 text-xs text-slate-400">m</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block mb-1">벽체 높이 (m)</span>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className={`w-full rounded-xl px-3.5 py-2.5 font-mono text-sm focus:outline-none border ${theme.calculator.inputField}`}
                        placeholder="예: 2.8"
                      />
                      <span className="absolute right-3 top-2.5 text-xs text-slate-400">m</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-[11px] text-slate-500 block mb-1">총 시공 면적 (㎡)</span>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      value={areaInput}
                      onChange={(e) => setAreaInput(e.target.value)}
                      className={`w-full rounded-xl px-3.5 py-2.5 font-mono text-sm focus:outline-none border ${theme.calculator.inputField}`}
                      placeholder="예: 28"
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-slate-400">㎡</span>
                  </div>
                </div>
              )}
            </div>

            {/* Wastage Rate */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs ${theme.calculator.label}`}>시공 파손/할증률</span>
                <span className="text-xs text-blue-700 font-mono font-bold">+{lossRate}% 적용 중</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[3, 5, 10].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setLossRate(rate)}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      lossRate === rate
                        ? theme.calculator.tabActive
                        : theme.calculator.tabInactive
                    }`}
                  >
                    {rate}% {rate === 3 ? "(정밀)" : rate === 5 ? "(표준권장)" : "(여유)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Real-time Calculation Output Banner */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
              <div className="flex items-center justify-between border-b border-blue-200/60 pb-2.5">
                <div>
                  <span className="text-[11px] text-blue-800 font-semibold block">계산 시공 면적</span>
                  <span className="text-xl font-mono font-black text-slate-900">
                    {totalArea.toFixed(2)}㎡
                  </span>
                  <span className="text-xs text-slate-500 ml-1 font-mono">(약 {results.pyeong}평)</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-blue-800 font-semibold block">예상 총 중량</span>
                  <span className="text-xl font-mono font-black text-slate-900">
                    {results.totalWeightTon}톤
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-xl border border-blue-200 shadow-sm">
                  <span className="text-[11px] text-slate-500 block">최종 권장 발주량</span>
                  <div className="text-xl sm:text-2xl font-mono font-black text-red-600">
                    {results.totalPiecesWithLoss.toLocaleString()}
                    <span className="text-xs font-bold text-slate-800 ml-1">장</span>
                  </div>
                  <span className="text-[10px] text-slate-400">정미 {results.netPieces}장 + 할증 {lossRate}%</span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-blue-200 shadow-sm">
                  <span className="text-[11px] text-slate-500 block">필요 파레트 수</span>
                  <div className="text-xl sm:text-2xl font-mono font-black text-blue-700">
                    {results.palletsNeeded}
                    <span className="text-xs font-bold text-slate-800 ml-1">파레트</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{results.fullPallets}파레트 + {results.remainderPieces}장</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs text-slate-700">
                <Truck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>추천 운송 차종: <strong className="text-blue-900 font-bold">{results.truckRecommendation}</strong> (차상도 인도)</span>
              </div>
            </div>
          </div>

          {/* Column 2 (Right): One-Touch Quick Quotation Form */}
          <div className={`lg:col-span-6 ${theme.calculator.panelCard}`}>
            <div className={`flex items-center justify-between pb-3.5 ${theme.calculator.panelHeaderBorder}`}>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className={`text-base sm:text-lg font-bold ${theme.calculator.panelTitle}`}>
                  원터치 빠른 견적 & 출하 상담
                </h3>
              </div>
              <a
                href="tel:055-582-4346"
                className="text-xs text-red-600 font-bold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>055-582-4346~7</span>
              </a>
            </div>

            {/* Success State */}
            {formSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950">
                  견적 문의가 정상 접수되었습니다!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  남경콘크리트(주) 출하 담당자가 확인 후, 남겨주신 연락처로 정확한 제품 단가 및 운송 배차 일정을 신속히 안내해 드리겠습니다.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-700 transition-colors"
                >
                  새로운 문의 작성하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                {/* Auto-Linked Material Requirement Banner */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-slate-700">
                    <span className="font-bold text-blue-900 block">계산된 예상 물량 자동 첨부</span>
                    <span className="text-slate-600">
                      {selectedProduct.shortName} · 약 <strong>{results.totalPiecesWithLoss.toLocaleString()}장</strong> ({results.palletsNeeded}파레트 / {results.totalWeightTon}톤)
                    </span>
                  </div>
                </div>

                {/* Honeypot Spam Checkbox */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={botcheck}
                  onChange={(e) => setBotcheck(e.target.checked)}
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={`text-xs block mb-1 ${theme.calculator.label}`}>
                      성함 / 상호명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyOrName}
                      onChange={(e) => setFormData({ ...formData, companyOrName: e.target.value })}
                      placeholder="예: 홍길동 (남경건설)"
                      className={`w-full rounded-xl px-3.5 py-2.5 text-sm border focus:outline-none ${theme.calculator.inputField}`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs block mb-1 ${theme.calculator.label}`}>
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className={`w-full rounded-xl px-3.5 py-2.5 text-sm border focus:outline-none ${theme.calculator.inputField}`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-xs block mb-1 ${theme.calculator.label}`}>
                    납품 현장 주소 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.deliveryAddress}
                    onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                    placeholder="예: 경남 함안군 법수면 또는 창원/부산 현장 주소"
                    className={`w-full rounded-xl px-3.5 py-2.5 text-sm border focus:outline-none ${theme.calculator.inputField}`}
                  />
                </div>

                <div>
                  <label className={`text-xs block mb-1 ${theme.calculator.label}`}>
                    추가 요청사항 (선택)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="현장 지게차/크레인 하차 조건, 희망 출하일, 골재·레미탈 병합 배차 등"
                    className={`w-full rounded-xl px-3.5 py-2 text-sm border focus:outline-none ${theme.calculator.inputField}`}
                  />
                </div>

                {/* Privacy Agreement Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <span className="text-xs text-slate-600 leading-snug">
                      <strong className="text-slate-900">[필수] 개인정보 수집 및 이용 동의</strong>
                      <span className="block text-[11px] text-slate-500">
                        수집항목: 성함, 연락처, 현장주소 / 목적: 견적 및 상담 회신 / 1년 보관 후 파기
                      </span>
                    </span>
                  </label>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit & Direct Call Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>견적 신청 접수 중...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>계산된 내역으로 견적 신청</span>
                      </>
                    )}
                  </button>

                  <a
                    href="tel:055-582-4346"
                    className="flex items-center justify-center gap-1.5 py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-slate-600" />
                    <span>전화 직통 상담</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
