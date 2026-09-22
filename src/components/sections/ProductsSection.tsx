"use client";

import React, { useState } from "react";
import {
  standardBricks,
  basicBlocks,
  variantBlocks,
  civilProducts,
  ancillaryMaterials,
  ProductSpec,
} from "@/data/products";
import SmartImage from "@/components/common/SmartImage";
import { Copy, Check, ShieldCheck, Box, Layers, Building2, Package, Truck, ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"brick" | "block_basic" | "block_variant" | "civil" | "materials">("block_basic");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  const tabs = [
    { id: "block_basic", label: "속빈블록 기본형 (4/6/8\")", icon: Box, count: 3 },
    { id: "brick", label: "콘크리트 벽돌", icon: Layers, count: 1 },
    { id: "block_variant", label: "이형 블록 (마무리/U형)", icon: Package, count: 6 },
    { id: "civil", label: "토목용 · 인방재", icon: Building2, count: 2 },
    { id: "materials", label: "골재 · 레미탈 일괄배차", icon: Truck, count: 3 },
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50 text-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-3 py-1 rounded-full border border-red-200">
            Products & Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            표준 규격 및 제품 제원표
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            KS 국가산업표준 및 친환경 환경표지를 획득한 고품질 콘크리트 제품군입니다.
            <br className="hidden sm:inline" />
            조달청 나라장터 관급 납품용 <strong className="text-red-600 font-semibold">물품식별번호 원클릭 복사</strong>를 지원합니다.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/25 scale-[1.02]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: 속빈콘크리트블록 기본형 (4인치, 6인치, 8인치) */}
        {activeTab === "block_basic" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Overview Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {basicBlocks.map((block, idx) => (
                <div
                  key={block.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col"
                >
                  <SmartImage
                    src={block.imageSrc}
                    alt={block.title}
                    title={block.name}
                    subtitle={`규격: ${block.dimensions} mm`}
                    category="block"
                    aspectRatio="aspect-[16/10]"
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono">
                          {block.modelCode}
                        </span>
                        <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> KS C종
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{block.name}</h3>
                      <p className="text-xs text-slate-500 mb-4">{block.description}</p>

                      {/* Specs Mini Table */}
                      <div className="bg-slate-50 rounded-xl p-3.5 text-xs space-y-2 mb-4 border border-slate-100">
                        <div className="flex justify-between">
                          <span className="text-slate-500">치수 (W×H×L)</span>
                          <span className="font-semibold text-slate-800 font-tabular">
                            {block.dimensions} mm
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">단위 중량</span>
                          <span className="font-semibold text-slate-800 font-tabular">
                            {block.weight}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">1㎡ 소요량</span>
                          <span className="font-semibold text-red-600 font-tabular">
                            {block.usagePerM2}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">1파레트 포장</span>
                          <span className="font-semibold text-slate-800 font-tabular">
                            {block.packagePerPallet}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 조달청 물품식별번호 원클릭 복사 바 */}
                    {block.procurementCode && (
                      <div className="pt-2 border-t border-slate-100">
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 text-white text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 block">조달청 식별번호</span>
                            <span className="font-mono font-bold tracking-wider text-amber-400">
                              {block.procurementCode}
                            </span>
                          </div>
                          <button
                            onClick={() => copyToClipboard(block.procurementCode!)}
                            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                            title="물품식별번호 복사"
                          >
                            {copiedCode === block.procurementCode ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">복사됨</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-400" />
                                <span>복사</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Comprehensive Table View */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-x-auto">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>속빈콘크리트블록 기본형 제원표 (KS F 4002 C종)</span>
                <span className="text-xs font-normal text-slate-500"> 단위: mm, kg</span>
              </h4>
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-y border-slate-200 text-slate-700">
                    <th className="py-3 px-4 font-bold">품명</th>
                    <th className="py-3 px-4 font-bold">모델명</th>
                    <th className="py-3 px-4 font-bold">치수 (W×H×L, mm)</th>
                    <th className="py-3 px-4 font-bold">중량 (kg)</th>
                    <th className="py-3 px-4 font-bold">압축강도</th>
                    <th className="py-3 px-4 font-bold text-red-600">1㎡ 당 소요량</th>
                    <th className="py-3 px-4 font-bold">1파레트 포장수량</th>
                    <th className="py-3 px-4 font-bold">조달청 식별번호</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {basicBlocks.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{b.name}</td>
                      <td className="py-3.5 px-4 text-slate-600 font-mono">{b.modelCode}</td>
                      <td className="py-3.5 px-4 text-slate-800 font-tabular">{b.dimensions}</td>
                      <td className="py-3.5 px-4 text-slate-800 font-tabular">{b.weight}</td>
                      <td className="py-3.5 px-4 text-slate-800">{b.strength}</td>
                      <td className="py-3.5 px-4 text-red-600 font-bold font-tabular">{b.usagePerM2}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-800 font-tabular">{b.packagePerPallet}</td>
                      <td className="py-3.5 px-4 font-mono font-semibold text-slate-900">
                        <button
                          onClick={() => copyToClipboard(b.procurementCode!)}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs text-slate-800 border border-slate-300"
                        >
                          <span>{b.procurementCode}</span>
                          <Copy className="w-3 h-3 text-slate-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: 콘크리트 벽돌 (기본 2종 벽돌) */}
        {activeTab === "brick" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {standardBricks.map((brick) => (
              <div
                key={brick.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-5 relative">
                  <SmartImage
                    src={brick.imageSrc}
                    alt={brick.title}
                    title={brick.name}
                    subtitle={`규격: ${brick.dimensions} mm`}
                    category="brick"
                    aspectRatio="aspect-[4/3] lg:aspect-auto"
                    priority={true}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="h-full w-full object-cover min-h-[320px]"
                  />
                </div>

                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-100 text-red-700">
                        {brick.modelCode}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> KS F 4004 (제 9708호)
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                        환경표지 (제 32027호)
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                      {brick.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                      {brick.description}
                    </p>

                    {/* Brick Detailed Specs Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 text-xs sm:text-sm">
                      <div>
                        <span className="text-slate-500 block text-xs">치수 (W×H×L)</span>
                        <span className="font-bold text-slate-900 font-tabular">{brick.dimensions} mm</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-xs">단위 중량</span>
                        <span className="font-bold text-slate-900 font-tabular">{brick.weight}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-xs">압축강도</span>
                        <span className="font-bold text-slate-900">{brick.strength}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-xs">0.5B 쌓기 소요량</span>
                        <span className="font-bold text-red-600 font-tabular">75장 / ㎡</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-xs">1.0B 쌓기 소요량</span>
                        <span className="font-bold text-red-600 font-tabular">149장 / ㎡</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-xs">1파레트 포장수량</span>
                        <span className="font-bold text-slate-900 font-tabular">960장 / Pallet</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {brick.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Procurement Code Box */}
                  <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block">조달청 나라장터 물품식별번호</span>
                      <span className="font-mono text-xl font-extrabold text-amber-400 tracking-wider">
                        {brick.procurementCode}
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(brick.procurementCode!)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all"
                    >
                      {copiedCode === brick.procurementCode ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>복사 완료</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-white" />
                          <span>식별번호 원클릭 복사</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: 속빈콘크리트블록 이형 규격 (온마무리, 반마무리, U블록) */}
        {activeTab === "block_variant" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    속빈콘크리트블록 이형(Variant) 규격표
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    벽체 모서리 마감용 온마무리·반마무리 및 보강 철근 타설용 U형 블록
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  <Package className="w-4 h-4 text-red-600" />
                  대표 이미지 매핑: block-variant.jpg
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-y border-slate-200 text-slate-700">
                      <th className="py-3 px-4 font-bold">품명</th>
                      <th className="py-3 px-4 font-bold">호칭 및 규격</th>
                      <th className="py-3 px-4 font-bold">치수 (W×H×L, mm)</th>
                      <th className="py-3 px-4 font-bold">중량 (kg)</th>
                      <th className="py-3 px-4 font-bold text-red-600">1㎡ 소요량</th>
                      <th className="py-3 px-4 font-bold">1파레트 수량</th>
                      <th className="py-3 px-4 font-bold">주요 비고 및 용도</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {variantBlocks.map((vb, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">{vb.name}</td>
                        <td className="py-3.5 px-4 font-mono text-slate-600">{vb.specCode}</td>
                        <td className="py-3.5 px-4 font-tabular text-slate-800">{vb.dimensions}</td>
                        <td className="py-3.5 px-4 font-tabular text-slate-800">{vb.weight}</td>
                        <td className="py-3.5 px-4 font-tabular text-red-600 font-bold">{vb.usagePerM2}</td>
                        <td className="py-3.5 px-4 font-tabular font-semibold text-slate-800">{vb.packagePerPallet}</td>
                        <td className="py-3.5 px-4 text-slate-600 text-xs">{vb.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: 토목용 블록 및 인방재 */}
        {activeTab === "civil" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {civilProducts.map((cp, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      토목 & 건축 특수재
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-1">{cp.name}</h3>
                    <p className="text-sm font-semibold text-red-600 mb-4">{cp.subName}</p>

                    <div className="bg-slate-50 rounded-xl p-4 text-xs sm:text-sm space-y-2 mb-6 border border-slate-100">
                      <div>
                        <span className="text-slate-500 block text-xs">규격</span>
                        <span className="font-semibold text-slate-800">{cp.dimensions}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-xs">중량</span>
                        <span className="font-semibold text-slate-800">{cp.weight}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-xs">적용 및 용도</span>
                        <span className="font-semibold text-slate-800">{cp.usage}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {cp.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700"
                    >
                      <span>현장 맞춤 규격 견적 상담 요청하기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: 골재 · 레미탈 일괄배차 부자재 */}
        {activeTab === "materials" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  One-Stop Concrete Solution
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1 mb-2">
                  벽돌·블록 주문 시 시멘트·골재 일괄 현장 직송
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  별도 유통처를 거칠 필요 없이, 남경콘크리트의 대형 덤프(25t, 15t) 및 5t 화물 배차망을 통해
                  품질이 검증된 세척 친모래, 한일/삼표 레미탈 정품, 특수몰탈을 함께 차상도로 인도받으실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ancillaryMaterials.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{cat.categoryName}</h4>
                    <p className="text-xs text-slate-500 mb-4">{cat.desc}</p>

                    <ul className="divide-y divide-slate-100 text-xs sm:text-sm">
                      {cat.items.map((it, i) => (
                        <li key={i} className="py-2.5 flex items-start justify-between gap-2">
                          <div>
                            <span className="font-semibold text-slate-800 block">{it.name}</span>
                            <span className="text-[11px] text-slate-400">{it.note}</span>
                          </div>
                          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 whitespace-nowrap">
                            {it.unit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400 block mb-1">배차 단위</span>
                    <span className="text-xs font-bold text-red-600">25톤 / 15톤 / 5톤 / 톤백 단위 배차</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
