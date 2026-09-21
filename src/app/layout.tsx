import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005"),
  title: "남경콘크리트(주) - 30년 전통의 콘크리트 벽돌·블록 제조 전문 기업",
  description:
    "KS F 4004 콘크리트 벽돌, KS F 4002 C종 속빈블록(4/6/8인치), 환경부 친환경 표지 인증, 조달청 나라장터 MAS 관급 납품. 경남 함안 대규모 제조 공장 및 모래·자갈·레미탈 원스톱 배차 시스템.",
  keywords: [
    "남경콘크리트",
    "콘크리트벽돌",
    "속빈콘크리트블록",
    "4인치블록",
    "6인치블록",
    "8인치블록",
    "KS벽돌",
    "KS블록",
    "환경표지",
    "조달청나라장터",
    "함안콘크리트",
    "경남벽돌",
    "레미탈배차",
    "친모래",
  ],
  authors: [{ name: "남경콘크리트(주)" }],
  openGraph: {
    title: "남경콘크리트(주) - 30년의 단단한 기초, 정직한 품질",
    description: "KS F 4004 벽돌 / KS F 4002 C종 블록 환경표지 획득 및 조달청 관급 등록 전문 제조공장",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/pic/hero/factory-panoramic.jpg",
        width: 1200,
        height: 630,
        alt: "남경콘크리트 공장 전경",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD 구조화 데이터 (LocalBusiness 및 Organization)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://namkyung-concrete.com/#organization",
      "name": "남경콘크리트(주)",
      "alternateName": "Namkyung Concrete Co., Ltd.",
      "telephone": "055-582-4347",
      "faxNumber": "055-582-4349",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "대송로 290",
        "addressLocality": "함안군 법수면",
        "addressRegion": "경상남도",
        "postalCode": "52044",
        "addressCountry": "KR",
      },
      "knowsAbout": [
        "콘크리트 벽돌 (KS F 4004)",
        "속빈콘크리트블록 (KS F 4002)",
        "환경부 친환경 인증 자재",
        "조달청 나라장터 관급 납품",
        "토목용 호안옹벽블록 및 경량인방",
        "친모래·골재·레미탈 일괄배차",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://namkyung-concrete.com/#localbusiness",
      "name": "남경콘크리트(주)",
      "image": "/pic/hero/factory-panoramic.jpg",
      "telephone": "055-582-4347",
      "faxNumber": "055-582-4349",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "대송로 290 (대송리 454-1)",
        "addressLocality": "함안군 법수면",
        "addressRegion": "경상남도",
        "postalCode": "52044",
        "addressCountry": "KR",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00",
        },
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "콘크리트 벽돌 (기본 2종)",
            "description": "KS F 4004 인증 및 환경부 자원순환 환경표지 획득 벽돌",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "속빈콘크리트블록 기본형 (4인치/6인치/8인치)",
            "description": "KS F 4002 C종 고강도 규격 및 환경표지 획득 블록",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "친환경 인증 자재",
            "description": "환경부 자원순환 환경표지 인증 콘크리트 제품군",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
