export interface CertificationItem {
  id: string;
  title: string;
  category: "KS" | "ECO" | "GOV";
  agency: string;
  certNumber: string;
  certDate: string;
  targetItems: string;
  description: string;
  imageSrc: string;
  badge: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "ks-brick",
    title: "KS F 4004 콘크리트 벽돌 인증",
    category: "KS",
    agency: "한국표준협회 (KSA)",
    certNumber: "제 9708 호",
    certDate: "1993년 01월 (최초 취득)",
    targetItems: "보통 콘크리트 벽돌 (일반/재활용 2종)",
    description:
      "한국산업표준(KS)의 엄격한 압축강도, 흡수율 및 치수 허용차 기준을 완벽하게 충족하며 1993년 이래 매년 사후관리를 통과한 정품 인증입니다.",
    imageSrc: "/pic/certs/cert-ks-brick.jpg",
    badge: "KS 국가표준 인증",
  },
  {
    id: "ks-block",
    title: "KS F 4002 속빈콘크리트블록 인증",
    category: "KS",
    agency: "한국표준협회 (KSA)",
    certNumber: "제 04-0434 호",
    certDate: "2004년 10월 (최초 취득)",
    targetItems: "C종 100mm, 150mm, 190mm 블록",
    description:
      "압축강도 C종(8.0 N/mm² 이상) 기준의 정밀 자동화 속빈 콘크리트 블록으로 구조 내력과 안전성을 공인받았습니다.",
    imageSrc: "/pic/certs/cert-ks-block.jpg",
    badge: "KS 국가표준 인증",
  },
  {
    id: "eco-label",
    title: "환경부 환경표지(친환경마크) 인증",
    category: "ECO",
    agency: "환경부 · 한국환경산업기술원",
    certNumber: "제 32027 호 (벽돌) / 제 35060 호 (블록)",
    certDate: "2021년 획득 (전 품목 갱신)",
    targetItems: "콘크리트 벽돌 전종 & C종 블록(NK-HB100/150/190)",
    description:
      "순환골재 및 친환경 원자재 배합 기술을 적용하여 환경오염 물질 저감 및 자원순환성 향상 인증 기준을 통과하였습니다.",
    imageSrc: "/pic/certs/cert-eco-label.jpg",
    badge: "친환경 자원순환 마크",
  },
  {
    id: "direct-production",
    title: "중소벤처기업부 직접생산확인증명서",
    category: "GOV",
    agency: "중소벤처기업부 · 중소기업유통센터",
    certNumber: "조달청 나라장터 공공구매 유효",
    certDate: "2006년 12월 ~ 현재 유지",
    targetItems: "콘크리트벽돌 및 속빈콘크리트블록",
    description:
      "제조 설비, 공장 면적, 상시 생산 인력 등 공공기관 납품 자격을 검증받아 중간 유통 마진 없는 정직한 공장도가로 공공기관에 납품합니다.",
    imageSrc: "/pic/certs/cert-direct-production.jpg",
    badge: "조달청 직접생산 확인",
  },
];
