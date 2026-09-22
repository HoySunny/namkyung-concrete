"use client";

import React, { useState, useMemo } from "react";
import { Calculator, RotateCcw, Truck, AlertCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/company";

interface CalcItem {
  id: string;
  name: string;
  sub: string;
  piecesPerM2: number;
  palletSize: number;
  weightPerUnit: number; // kg
}

const calcProducts: CalcItem[] = [
  {
    id: "brick-05b",
    name: "콘크리트 벽돌 (0.5B 쌓기)",
    sub: "두께 90mm 단벽 / 1㎡ 당 75장 소요",
    piecesPerM2: 75,
    palletSize: 960,
    weightPerUnit: 1.95,
  },
  {
    id: "brick-10b",
    name: "콘크리트 벽돌 (1.0B 쌓기)",
    sub: "두께 190mm 내력벽 / 1㎡ 당 149장 소요",
    piecesPerM2: 149,
    palletSize: 960,
    weightPerUnit: 1.95,
  },
  {
    id: "block-4inch",
    name: "4인치 속빈블록 (NK-HB100)",
    sub: "두께 100mm 칸막이벽 / 1㎡ 당 12.5장 소요",
    piecesPerM2: 12.5,
    palletSize: 144,
    weightPerUnit: 10.5,
  },
  {
    id: "block-6inch",
    name: "6인치 속빈블록 (NK-HB150)",
    sub: "두께 150mm 일반벽체 / 1㎡ 당 12.5장 소요",
    piecesPerM2: 12.5,
    palletSize: 96,
    weightPerUnit: 14.5,
  },
  {
    id: "block-8inch",
    name: "8인치 속빈블록 (NK-HB190)",
    sub: "두께 190mm 중량벽체 / 1㎡ 당 12.5장 소요",
    piecesPerM2: 12.5,
    palletSize: 72,
    weightPerUnit: 18.0,
  },
];

export default function CalculatorSection() {
  const [inputMode, setInputMode] = useState<"dimension" | "area">("dimension");
  const [width, setWidth] = useState<string>("10");
  const [height, setHeight] = useState<string>("2.8");
  const [areaInput, setAreaInput] = useState<string>("28");
  const [selectedProductId, setSelectedProductId] = useState<string>("block-6inch");
  const [lossRate, setLossRate] = useState<number>(5); // 3% or 5% or 10%

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
    return calcProducts.find((p) => p.id === selectedProductId) || calcProducts[2];
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

    // Recommended Truck dispatch estimation
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

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-900 text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80">
            <Calculator className="w-3.5 h-3.5 text-red-500" />
            Smart Material Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-4">
            간이 물량 및 소요 팔레트 계산기
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            벽체 면적과 할증률을 입력하시면 소요 장수, 출하 팔레트(파레트) 수, 총 중량을 즉시 산출해 드립니다.
            <br className="hidden sm:inline" />
            현장 시공 로스율(3%~5%)을 고려하여 최적의 발주 수량을 확인하세요.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Panel */}
          <div className="lg:col-span-6 bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>1. 품목 및 시공 면적 설정</span>
              </h3>
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2 py-1 rounded bg-slate-700/50 hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>초기화</span>
              </button>
            </div>

            {/* Product Selector */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-2">
                취급 품목 선택
              </label>
              <div className="grid grid-cols-1 gap-2">
                {calcProducts.map((p) => {
                  const isSelected = selectedProductId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProductId(p.id)}
                      className={`text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-red-600/20 border-red-500 text-white shadow-sm"
                          : "bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-700/50"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white">{p.name}</div>
                        <div className="text-xs text-slate-400">{p.sub}</div>
                      </div>
                      <div className="text-right text-xs">
                        <span className="font-mono font-semibold text-red-400 block">
                          1파레트: {p.palletSize}장
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {p.weightPerUnit}kg/장
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input Mode Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-300">면적 계산 방식</label>
                <div className="inline-flex rounded-lg bg-slate-900 p-1 border border-slate-700 text-xs">
                  <button
                    onClick={() => setInputMode("dimension")}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      inputMode === "dimension"
                        ? "bg-red-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    치수(가로×높이)
                  </button>
                  <button
                    onClick={() => setInputMode("area")}
                    className={`px-3 py-1 rounded-md font-medium transition-colors ${
                      inputMode === "area"
                        ? "bg-red-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    총 면적(㎡) 직접입력
                  </button>
                </div>
              </div>

              {inputMode === "dimension" ? (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">가로 길이 (m)</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono text-base focus:outline-none focus:border-red-500"
                        placeholder="예: 10"
                      />
                      <span className="absolute right-3.5 top-3.5 text-xs text-slate-500">m</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">벽체 높이 (m)</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono text-base focus:outline-none focus:border-red-500"
                        placeholder="예: 2.8"
                      />
                      <span className="absolute right-3.5 top-3.5 text-xs text-slate-500">m</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-xs text-slate-400 block mb-1">시공할 총 벽체 면적 (㎡)</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      value={areaInput}
                      onChange={(e) => setAreaInput(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-mono text-base focus:outline-none focus:border-red-500"
                      placeholder="예: 28"
                    />
                    <span className="absolute right-3.5 top-3.5 text-xs text-slate-500">㎡</span>
                  </div>
                </div>
              )}
            </div>

            {/* Wastage Rate Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-300">
                  현장 시공 파손/여유 할증률
                </label>
                <span className="text-xs text-red-400 font-mono font-bold">+{lossRate}% 적용</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[3, 5, 10].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setLossRate(rate)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      lossRate === rate
                        ? "bg-red-600 text-white border-red-500 shadow-sm"
                        : "bg-slate-900 text-slate-400 border-slate-700 hover:text-white"
                    }`}
                  >
                    {rate}% {rate === 3 ? "(정밀조적)" : rate === 5 ? "(표준권장)" : "(절단많음)"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Output Result Card */}
          <div className="lg:col-span-6 bg-gradient-to-b from-slate-800 to-slate-850 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
            <div className="border-b border-slate-700/80 pb-4">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                Estimated Requirements
              </span>
              <h3 className="text-xl font-extrabold text-white">산출 결과 명세표</h3>
              <p className="text-xs text-slate-400 mt-1">
                계산 기준 품목: <strong className="text-white">{selectedProduct.name}</strong>
              </p>
            </div>

            {/* Area Result Banner */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">계산 시공 면적</span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                  {totalArea.toFixed(2)}
                </span>
                <span className="text-sm font-bold text-slate-400 ml-1">㎡</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">평형 환산</span>
                <span className="text-lg font-mono font-bold text-slate-300">
                  약 {results.pyeong}
                </span>
                <span className="text-xs text-slate-400 ml-0.5">평</span>
              </div>
            </div>

            {/* Key 4 Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Total Pieces */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                <span className="text-xs text-slate-400 block mb-1">최종 발주 권장 수량</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-red-400">
                    {results.totalPiecesWithLoss.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-white">장</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  정미 {results.netPieces.toLocaleString()}장 + 할증 {lossRate}%
                </div>
              </div>

              {/* Total Pallets */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                <span className="text-xs text-slate-400 block mb-1">필요 팔레트(파레트)</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-amber-400">
                    {results.palletsNeeded}
                  </span>
                  <span className="text-sm font-bold text-white">파레트</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {results.fullPallets}파레트 + {results.remainderPieces}장 낱장
                </div>
              </div>

              {/* Total Weight */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                <span className="text-xs text-slate-400 block mb-1">예상 총 중량</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-mono font-black text-white">
                    {results.totalWeightTon}
                  </span>
                  <span className="text-sm font-bold text-slate-300">톤 (Ton)</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  단위중량: {selectedProduct.weightPerUnit}kg/장
                </div>
              </div>

              {/* Truck Dispatch */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                <span className="text-xs text-slate-400 block mb-1">추천 운송 차종</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Truck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {results.truckRecommendation}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1.5">
                  현장 차상도 인도 원칙
                </div>
              </div>
            </div>

            {/* Notice & CTA */}
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/60 text-xs text-red-200/90 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="leading-relaxed">
                위 산출값은 표준 규격에 의한 참고치이며, 창호/개구부 면적 공제 및 현장 조건에 따라
                실제 소요량이 달라질 수 있습니다. 정확한 견적은 당사 출하팀으로 문의해 주십시오.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${companyData.telDirect}`}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-lg shadow-red-600/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>계산 결과로 전화 상담 ({companyData.telDirect})</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-colors"
              >
                <span>온라인 견적 문의 폼 작성</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
