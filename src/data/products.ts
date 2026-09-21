export interface ProductSpec {
  id: string;
  name: string;
  category: "brick" | "block_basic" | "block_variant" | "civil" | "materials";
  modelCode?: string;
  title: string;
  subTitle: string;
  dimensions: string; // W × H × L (mm)
  weight: string; // kg
  strength?: string;
  usagePerM2: string;
  packagePerPallet: string; // 1파레트 수량
  piecesPerPalletNum?: number; // 숫자형 파레트 수량 (계산기용)
  piecesPerM2Num?: number; // 숫자형 ㎡당 소요량 (계산기용)
  weightNum?: number; // 숫자형 단위중량 (kg)
  procurementCode?: string; // 조달청 물품식별번호
  certification?: string;
  description: string;
  imageSrc: string;
  features: string[];
}

export const standardBricks: ProductSpec[] = [
  {
    id: "brick-standard",
    name: "기본 2종 벽돌",
    category: "brick",
    modelCode: "NAM-BRICK",
    title: "일반/재활용 콘크리트 벽돌 (기본 2종)",
    subTitle: "KS F 4004 인증 및 환경부 자원순환 환경표지 획득",
    dimensions: "190 × 90 × 57 (±2)",
    weight: "약 1.9 ~ 2.0 kg",
    strength: "표준강도 8.0 N/mm² 이상",
    usagePerM2: "75장 (0.5B 쌓기) / 149장 (1.0B 쌓기)",
    packagePerPallet: "960장 / Pallet",
    piecesPerPalletNum: 960,
    piecesPerM2Num: 75,
    weightNum: 1.95,
    procurementCode: "22799701",
    certification: "KS F 4004 (제 9708호) / 환경표지 (제 32027호)",
    description:
      "정밀 자동화 압축성형 및 증기양생으로 모서리 파손이 적고 압축강도가 뛰어난 표준 콘크리트 벽돌입니다. 조달청 다수공급자계약(MAS) 등록 정품입니다.",
    imageSrc: "/pic/products/brick-standard.jpg",
    features: [
      "KS F 4004 한국산업규격 1종 기준 충족",
      "환경부 친환경 자원순환성 향상 환경표지 인증",
      "흡수율 10% 이하, 압축강도 8.0 N/mm² 이상 보장",
      "규격오차 ±2mm 이내의 정밀한 조적 품질",
    ],
  },
];

export const basicBlocks: ProductSpec[] = [
  {
    id: "block-4inch",
    name: "4인치 기본 블록",
    category: "block_basic",
    modelCode: "NK-HB100 (C종 100mm)",
    title: "4인치 속빈콘크리트블록 기본형",
    subTitle: "KS F 4002 C종 고강도 규격",
    dimensions: "100 × 190 × 390 (±2)",
    weight: "약 10 ~ 11 kg",
    strength: "8.0 N/mm² 이상",
    usagePerM2: "12.5장 / ㎡",
    packagePerPallet: "144장 / Pallet",
    piecesPerPalletNum: 144,
    piecesPerM2Num: 12.5,
    weightNum: 10.5,
    procurementCode: "23051583",
    certification: "KS F 4002 (제 04-0434호) / 환경표지 (제 35060호)",
    description:
      "실내 칸막이벽, 화장실 및 비내력 조적벽체에 가장 보편적으로 사용되는 100mm 폭의 표준 블록입니다.",
    imageSrc: "/pic/products/block-4inch.jpg",
    features: [
      "경량화와 강도의 최적 밸런스 설계",
      "정밀 치수 관리로 줄눈 시공성 우수",
      "조달청 식별번호 23051583 관급 등록품",
    ],
  },
  {
    id: "block-6inch",
    name: "6인치 기본 블록",
    category: "block_basic",
    modelCode: "NK-HB150 (C종 150mm)",
    title: "6인치 속빈콘크리트블록 기본형",
    subTitle: "KS F 4002 C종 고강도 규격",
    dimensions: "150 × 190 × 390 (±2)",
    weight: "약 14 ~ 15 kg",
    strength: "8.0 N/mm² 이상",
    usagePerM2: "12.5장 / ㎡",
    packagePerPallet: "96장 / Pallet",
    piecesPerPalletNum: 96,
    piecesPerM2Num: 12.5,
    weightNum: 14.5,
    procurementCode: "23052258",
    certification: "KS F 4002 (제 04-0434호) / 환경표지 (제 35060호)",
    description:
      "외벽 및 내벽, 공장, 창고 경계벽 등 구조적 하중과 차음성이 요구되는 공간에 표준으로 적용됩니다.",
    imageSrc: "/pic/products/block-6inch.jpg",
    features: [
      "철근 배근 및 사춤 타설이 용이한 공동부 구조",
      "KS C종 기준 충족 압축강도",
      "조달청 식별번호 23052258 관급 등록품",
    ],
  },
  {
    id: "block-8inch",
    name: "8인치 기본 블록",
    category: "block_basic",
    modelCode: "NK-HB190 (C종 190mm)",
    title: "8인치 속빈콘크리트블록 기본형",
    subTitle: "KS F 4002 C종 고강도 규격",
    dimensions: "190 × 190 × 390 (±2)",
    weight: "약 18 kg",
    strength: "8.0 N/mm² 이상",
    usagePerM2: "12.5장 / ㎡",
    packagePerPallet: "72장 / Pallet",
    piecesPerPalletNum: 72,
    piecesPerM2Num: 12.5,
    weightNum: 18.0,
    procurementCode: "23052259",
    certification: "KS F 4002 (제 04-0434호) / 환경표지 (제 35060호)",
    description:
      "중량물 지지 내력벽, 방음벽 및 대형 플랜트 옹벽 구조체에 사용되는 최고 하중 지지형 블록입니다.",
    imageSrc: "/pic/products/block-8inch.jpg",
    features: [
      "190mm 두께의 높은 자중과 내구성",
      "내화·차음·방습 성능 극대화",
      "조달청 식별번호 23052259 관급 등록품",
    ],
  },
];

export interface VariantBlock {
  name: string;
  specCode: string;
  dimensions: string;
  weight: string;
  usagePerM2: string;
  packagePerPallet: string;
  purpose: string;
}

export const variantBlocks: VariantBlock[] = [
  {
    name: "6인치 온마무리",
    specCode: "6B 온마무리",
    dimensions: "150 × 190 × 390",
    weight: "14.5 kg",
    usagePerM2: "12.5장",
    packagePerPallet: "96장 / Pallet",
    purpose: "벽체 끝단 개구부 및 모서리 깔끔한 마감용",
  },
  {
    name: "6인치 반마무리",
    specCode: "6B 반마무리",
    dimensions: "150 × 190 × 190",
    weight: "7.0 kg",
    usagePerM2: "25.0장",
    packagePerPallet: "192장 / Pallet",
    purpose: "줄눈 엇갈려 쌓기 시공 시 양단 모서리 반절 마감용",
  },
  {
    name: "6인치 U블록",
    specCode: "6B U형",
    dimensions: "150 × 190 × 390",
    weight: "15.0 kg",
    usagePerM2: "12.5장",
    packagePerPallet: "96장 / Pallet",
    purpose: "횡방향 철근 배근 및 테두리보(인방) 콘크리트 타설용",
  },
  {
    name: "8인치 온마무리",
    specCode: "8B 온마무리",
    dimensions: "190 × 190 × 390",
    weight: "18.5 kg",
    usagePerM2: "12.5장",
    packagePerPallet: "72장 / Pallet",
    purpose: "중량 벽체 끝단 모서리 수직 직각 마감용",
  },
  {
    name: "8인치 반마무리",
    specCode: "8B 반마무리",
    dimensions: "190 × 190 × 190",
    weight: "9.0 kg",
    usagePerM2: "25.0장",
    packagePerPallet: "144장 / Pallet",
    purpose: "중량 벽체 엇갈림 시공 및 창호 주변부 마감용",
  },
  {
    name: "8인치 U블록",
    specCode: "8B U형",
    dimensions: "190 × 190 × 390",
    weight: "18.0 kg",
    usagePerM2: "12.5장",
    packagePerPallet: "72장 / Pallet",
    purpose: "횡방향 보강근 삽입 및 테두리보 일체화 시공용",
  },
];

export interface CivilProduct {
  name: string;
  subName: string;
  dimensions: string;
  weight: string;
  usage: string;
  features: string[];
}

export const civilProducts: CivilProduct[] = [
  {
    name: "호안옹벽블록",
    subName: "하천 및 비탈면 토사유실 방지",
    dimensions: "현장 주문 규격 (대형 연동식)",
    weight: "고강도 규격",
    usage: "하천 호안, 절토부 사면, 제방 침식 방지",
    features: [
      "수류 저항력 및 맞물림 결속력 극대화",
      "식생 공간 확보로 친환경 생태하천 조성 가능",
      "내수성·내동결융해성 우수 콘크리트 배합",
    ],
  },
  {
    name: "경량인방 (Lintel)",
    subName: "개구부(문틀/창틀) 상부 하중 분산 지지재",
    dimensions: "80 × 57 mm 단면, 길이 800mm ~ 2,000mm",
    weight: "단위중량 6.0 ± 0.5 kg/M",
    usage: "창호 및 출입구 상부 조적벽체 하중 분산",
    features: [
      "고장력 철선 내장 프리스트레스트 구조",
      "별도의 거푸집 없이 신속한 현장 거치 가능",
      "현장 길이에 맞춘 다양한 길이(0.8m~2.0m) 공급",
    ],
  },
];

export interface AncillaryCategory {
  categoryName: string;
  desc: string;
  items: {
    name: string;
    unit: string;
    note: string;
  }[];
}

export const ancillaryMaterials: AncillaryCategory[] = [
  {
    categoryName: "골재류 (직송 및 소량 배차)",
    desc: "현장 직송 덤프 배차 및 소량 톤백 공급",
    items: [
      { name: "친모래 (세척사)", unit: "25ton / 5ton 덤프", note: "조적/미장용 최상급 세척사" },
      { name: "톤백 친모래", unit: "0.9루베 / bag (약 1.3ton)", note: "도심지 및 협소 현장 크레인 하차용" },
      { name: "석분", unit: "25ton / 5ton 덤프", note: "보도블록 및 포장 기초 다짐용" },
      { name: "쇄석 자갈 (25mm)", unit: "25ton / 5ton 덤프", note: "배수층 및 콘크리트 배합용" },
    ],
  },
  {
    categoryName: "레미탈류 (한일시멘트 / 삼표레미탈 정품)",
    desc: "엄격한 KS 규격 정품 몰탈 전 품목 일괄 배차",
    items: [
      { name: "일반 미장용 레미탈", unit: "40kg / 25kg 포", note: "내·외벽 미장 마감용" },
      { name: "조적용 레미탈", unit: "40kg / 25kg 포", note: "벽돌 및 블록 조적 전용 고접착력" },
      { name: "견출용 레미탈", unit: "40kg 포", note: "콘크리트 면보수 및 견출 마감" },
      { name: "타일 떠붙임용 몰탈", unit: "40kg / 25kg 포", note: "벽체 타일 시공용" },
      { name: "자동수평몰탈 (SL)", unit: "25kg 포", note: "실내 바닥 셀프 레벨링용" },
    ],
  },
  {
    categoryName: "시멘트 및 특수몰탈 부자재",
    desc: "토목·건축 보수 및 특수 시공재 원스톱 공급",
    items: [
      { name: "일반 포틀랜드 시멘트", unit: "40kg 포", note: "KS L 5201 1종 시멘트" },
      { name: "백시멘트", unit: "20kg 포", note: "줄눈 및 인테리어 백색 시멘트" },
      { name: "타일 줄눈시멘트 (백색/비둘기색)", unit: "20kg 포", note: "타일 줄눈 메지 전용" },
      { name: "압착시멘트 (회색/백색)", unit: "20kg 포", note: "바닥/벽 타일 압착 본딩" },
      { name: "무수축 그라우트 시멘트", unit: "25kg 포", note: "기계 기초 및 교량 패드 충진용" },
      { name: "초속경 시멘트", unit: "20kg 포", note: "긴급 보수 및 빠른 강도 발현" },
      { name: "몰다인 / 메토실 / 유니셀", unit: "통 / 포", note: "접착 증강제 및 몰탈 혼화제" },
    ],
  },
];
