export interface HistoryItem {
  year: string;
  month?: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const historyTimeline: HistoryItem[] = [
  {
    year: "1991",
    month: "01",
    title: "남경콘크리트(주) 법인 설립",
    description: "콘크리트 2차 가공제품 전문 제조업체로 출발",
    highlight: true,
  },
  {
    year: "1992",
    month: "03",
    title: "경남 함안 공장 등록 완료",
    description: "대송리 대규모 제조 공장 부지 및 자동화 배치플랜트 설비 준공",
  },
  {
    year: "1992",
    month: "06",
    title: "전사적 품질경영 T.Q.M 체제 도입",
    description: "원자재 입고부터 증기양생 및 출하까지 품질 표준화 프로세스 확립",
  },
  {
    year: "1993",
    month: "01",
    title: "KS F 4004 (콘크리트 벽돌) 한국산업규격 획득",
    description: "제 9708 호 표준인증 획득으로 품질 신뢰도 공식 인정",
    highlight: true,
  },
  {
    year: "2004",
    month: "10",
    title: "KS F 4002 (속빈콘크리트 블록) 한국산업규격 획득",
    description: "C종 고강도 블록 제 04-0434 호 인증 취득",
    highlight: true,
  },
  {
    year: "2006",
    month: "12",
    title: "직접생산확인증명서 취득",
    description: "중소벤처기업부 인증 콘크리트벽돌 및 속빈콘크리트블록 공공구매 직접생산자 등록",
  },
  {
    year: "2007",
    month: "공공조달",
    title: "조달청 나라장터 다수공급자(MAS) 계약 체결",
    description: "관급 공사 현장 직접 납품 체계 본격 가동",
    highlight: true,
  },
  {
    year: "2021",
    month: "친환경",
    title: "환경부 자원순환 환경표지 인증 전 품목 획득",
    description: "벽돌(제32027호) 및 C종 블록 4·6·8인치(제35060호) 친환경 인증",
    highlight: true,
  },
  {
    year: "현재",
    month: "도약",
    title: "영남권 최대 콘크리트 2차 제품 및 원스톱 배차 거점",
    description: "블록·벽돌뿐만 아니라 친모래, 자갈, 레미탈, 특수몰탈 일괄 차상도 직송 시스템 운영",
    highlight: true,
  },
];
