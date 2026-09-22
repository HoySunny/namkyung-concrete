export interface CompanyProfile {
  name: string;
  nameEn: string;
  establishedDate: string;
  ceo: string;
  businessNumber: string;
  address: string;
  addressDetail: string;
  tel: string;
  telDirect: string;
  telSecondary: string;
  telExtra: string;
  fax: string;
  deliveryPrinciple: string;
  slogan: string;
  subSlogan: string;
  historyHighlight: string;
}

export const companyData: CompanyProfile = {
  name: "남경콘크리트(주)",
  nameEn: "Namkyung Concrete Co., Ltd.",
  establishedDate: "1991년 01월 31일",
  ceo: "조현열",
  businessNumber: "608-81-12411",
  address: "경상남도 함안군 법수면 대송로 290",
  addressDetail: "(대송리 454-1)",
  tel: "055-582-4347",
  telDirect: "055-582-4348",
  telSecondary: "055-582-4346",
  telExtra: "055-585-0025",
  fax: "055-582-4349",
  deliveryPrinciple: "납품장소 차상도 인도 원칙 (현장 하차 시 대형 화물 배차 연계)",
  slogan: "30년의 단단한 기초, 정직한 품질로 증명합니다",
  subSlogan: "KS 인증 및 친환경 환경표지 획득, 조달청 나라장터 관급 계약 제조 공장",
  historyHighlight: "30여 년 업력의 콘크리트 2차 제품 및 골재·레미탈 일괄 공급 거점",
};

export const keyMetrics = [
  { label: "업력", value: "30+", unit: "년", desc: "1991년 창립 이래 신뢰의 제조" },
  { label: "KS 국가표준 인증", value: "2", unit: "종", desc: "KS F 4004 / KS F 4002" },
  { label: "환경부 환경표지", value: "100", unit: "%", desc: "자원순환 친환경 인증 획득" },
  { label: "조달청 나라장터", value: "MAS", unit: "계약", desc: "공공기관 직접생산 공급업체" },
];
