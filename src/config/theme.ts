/**
 * 남경콘크리트(주) UI 스타일 테마 프리셋 시스템
 * 
 * [테마 전환 및 즉각 롤백 방법]
 * 아래 CURRENT_THEME 값을 'ORIGINAL'로 변경하면 단 한 줄로 이전의 다크/딥차콜 색감으로 100% 즉시 복구됩니다.
 * - 'LIGHT': 신규 하이엔드 라이트 인더스트리얼 테마 (기본 적용)
 * - 'ORIGINAL': 기존 다크 / 딥차콜 색감 테마 (안전 복구용)
 */

export type ThemeMode = "LIGHT" | "ORIGINAL";

// ★★★ 테마 전환 플래그 (단 1줄로 사이트 전체 색감 즉각 전환) ★★★
export const CURRENT_THEME: ThemeMode = "LIGHT";

export const themePresets = {
  // 1. 신규 하이엔드 라이트 인더스트리얼 테마
  LIGHT: {
    name: "하이엔드 라이트 테마 (High-End Industrial Light)",
    isLight: true,

    // 헤더 (Header)
    header: {
      wrapperScrolled: "bg-white/95 text-slate-900 backdrop-blur-md shadow-sm py-3 border-b border-slate-200",
      wrapperStatic: "bg-white text-slate-900 py-4 border-b border-slate-200",
      logoTitle: "text-slate-950",
      logoBadge: "bg-slate-100 text-slate-700 border-slate-300",
      logoSub: "text-slate-500",
      navLink: "text-slate-700 hover:text-blue-700 hover:bg-slate-100 font-medium",
      navLinkHighlight: "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-200 font-semibold",
      mobileBtn: "text-slate-700 hover:text-slate-950 hover:bg-slate-100",
      mobileDrawer: "bg-white/98 border-t border-slate-200 shadow-xl",
      mobileDrawerLink: "text-slate-800 hover:bg-slate-100 hover:text-blue-700",
      mobileDrawerArrow: "text-slate-400",
    },

    // 히어로 섹션 (HeroSection)
    hero: {
      sectionBg: "bg-slate-900 text-white",
      imageBrightness: "brightness-[1.02] contrast-[1.08] saturate-[1.08]",
      overlay: "bg-slate-900/20",
      overlayGradient: "bg-gradient-to-t from-slate-900/50 via-transparent to-transparent",
      glassCard: "bg-white/95 backdrop-blur-md border border-white/60 shadow-2xl rounded-3xl p-6 sm:p-9 text-slate-900",
      badge: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs sm:text-sm font-bold mb-4 shadow-sm",
      badgeDot: "w-2 h-2 rounded-full bg-red-600 animate-ping",
      title: "text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] text-slate-950 mb-4",
      titleAccent: "text-red-600 font-black",
      subCopy: "text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6",
      subCopyStrong: "text-slate-950 font-bold underline decoration-red-500/80 underline-offset-4",

      // 버튼 그룹
      btnPhone: "flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-600/30 border border-red-500 transition-all transform hover:-translate-y-0.5",
      btnCatalog: "flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-blue-50/90 hover:bg-blue-100 text-blue-900 font-bold text-sm sm:text-base border-2 border-blue-200 shadow-sm transition-all hover:border-blue-400",
      btnCalculator: "flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border-2 border-slate-300 shadow-sm transition-all hover:border-slate-400",
      btnQuote: "flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-sm transition-all",

      // 하단 카운터 메트릭 카드
      metricBorderTop: "border-t border-white/20 sm:border-slate-200",
      metricCard: "bg-white/95 border border-slate-200/90 backdrop-blur-md hover:border-blue-300 shadow-lg hover:shadow-xl transition-all",
      metricLabel: "text-slate-600 font-bold",
      metricValue: "text-slate-950 font-mono",
      metricUnit: "text-blue-700 font-black",
      metricDesc: "text-slate-600 font-medium",
    },

    // 자재 계산기 섹션 (CalculatorSection)
    calculator: {
      sectionBg: "bg-slate-50 text-slate-900",
      badge: "text-blue-700 bg-blue-50 border border-blue-200",
      title: "text-slate-900",
      subCopy: "text-slate-600",
      panelCard: "bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6",
      panelHeaderBorder: "border-b border-slate-200",
      panelTitle: "text-slate-900",
      resetBtn: "text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200",
      label: "text-slate-700 font-semibold",
      productActive: "bg-red-50/70 border-red-500 shadow-sm",
      productInactive: "bg-slate-50 border-slate-200 hover:border-slate-300",
      productNameActive: "text-slate-900 font-bold",
      productNameInactive: "text-slate-800 font-medium",
      productSub: "text-slate-500",
      inputField: "bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-red-500",
      tabActive: "bg-blue-600 text-white shadow-sm",
      tabInactive: "bg-slate-100 text-slate-700 hover:bg-slate-200",
      resultBox: "bg-slate-50 border-slate-200",
      resultBoxHighlight: "bg-blue-50/80 border-blue-200",
      truckBox: "bg-slate-50 border-slate-200",
      unitText: "text-slate-500",
      boldValueText: "text-slate-900",
    },

    // 푸터 (Footer)
    footer: {
      wrapper: "bg-slate-100 text-slate-600 border-t border-slate-200 text-sm",
      brandTitle: "text-slate-950",
      badge: "bg-white text-slate-700 border-slate-200 shadow-sm",
      heading: "text-slate-900 font-bold text-base tracking-wide border-b border-slate-200 pb-2",
      phone: "text-slate-900 font-mono font-bold text-base hover:text-red-600 transition-colors",
      subText: "text-slate-600",
      box: "p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-xs text-slate-600 space-y-2",
      boxHeading: "font-semibold text-slate-900",
      legalBorder: "border-t border-slate-200 text-xs text-slate-500 space-y-3",
      privacyBox: "p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-[11px] text-slate-600 leading-relaxed flex items-start gap-2",
    },

    // 모바일 플로팅 바 (FloatingBar)
    floatingBar: {
      scrollTopBtn: "bg-white/95 text-slate-900 border border-slate-300 shadow-xl hover:bg-red-600 hover:text-white",
      bottomBar: "bg-white/95 border-t border-slate-200 shadow-2xl",
      calcBtn: "bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200",
      phoneBtn: "bg-red-600 text-white hover:bg-red-700",
    },
  },

  // 2. 기존 다크 / 딥차콜 색감 테마 (100% 롤백용)
  ORIGINAL: {
    name: "기존 다크 테마 (Original Deep Charcoal)",
    isLight: false,

    // 헤더 (Header)
    header: {
      wrapperScrolled: "bg-slate-900/95 text-white backdrop-blur-md shadow-md py-3",
      wrapperStatic: "bg-slate-900 text-white py-4 border-b border-slate-800",
      logoTitle: "text-white",
      logoBadge: "bg-slate-800 text-slate-300 border-slate-700",
      logoSub: "text-slate-400",
      navLink: "text-slate-300 hover:text-white hover:bg-slate-800/80 font-medium",
      navLinkHighlight: "bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/20 font-medium",
      mobileBtn: "text-slate-400 hover:text-white hover:bg-slate-800",
      mobileDrawer: "bg-slate-900/98 border-t border-slate-800",
      mobileDrawerLink: "text-slate-200 hover:bg-slate-800 hover:text-white",
      mobileDrawerArrow: "text-slate-500",
    },

    // 히어로 섹션 (HeroSection)
    hero: {
      sectionBg: "bg-slate-900 text-white",
      imageBrightness: "brightness-[1.0] contrast-[1.02]",
      overlay: "bg-slate-950/40",
      overlayGradient: "bg-gradient-to-t from-slate-950/40 via-transparent to-transparent",
      glassCard: "bg-slate-950/70 border border-white/15 backdrop-blur-md shadow-2xl rounded-3xl p-6 sm:p-9 text-white",
      badge: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 text-red-400 border border-red-500/40 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md shadow-lg",
      badgeDot: "w-2 h-2 rounded-full bg-red-500 animate-ping",
      title: "text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]",
      titleAccent: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300",
      subCopy: "text-sm sm:text-base text-white font-medium leading-relaxed mb-6 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]",
      subCopyStrong: "text-white font-bold underline decoration-red-500/60 underline-offset-4",

      // 버튼 그룹
      btnPhone: "flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/50 border border-red-500 transition-all transform hover:-translate-y-0.5",
      btnCatalog: "flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/75 hover:bg-slate-900/90 text-white font-semibold text-sm sm:text-base border border-white/30 backdrop-blur-md shadow-lg transition-all hover:border-white/60",
      btnCalculator: "flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/75 hover:bg-slate-900/90 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-lg transition-all hover:border-white/40",
      btnQuote: "flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/75 hover:bg-slate-900/90 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-lg transition-all hover:border-white/40",

      // 하단 카운터 메트릭 카드
      metricBorderTop: "border-t border-white/15",
      metricCard: "bg-slate-950/65 border border-white/15 backdrop-blur-md hover:border-white/30 shadow-xl transition-all",
      metricLabel: "text-slate-300 font-medium",
      metricValue: "text-white font-mono drop-shadow-md",
      metricUnit: "text-red-400 font-bold",
      metricDesc: "text-slate-300/90 drop-shadow-sm",
    },

    // 자재 계산기 섹션 (CalculatorSection)
    calculator: {
      sectionBg: "bg-slate-900 text-white",
      badge: "text-red-400 bg-red-950/80 border border-red-800/80",
      title: "text-white",
      subCopy: "text-slate-300",
      panelCard: "bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6",
      panelHeaderBorder: "border-b border-slate-700",
      panelTitle: "text-white",
      resetBtn: "text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700",
      label: "text-slate-300",
      productActive: "bg-slate-900/90 border-red-500 shadow-md",
      productInactive: "bg-slate-900/40 border-slate-700 hover:border-slate-600",
      productNameActive: "text-white font-bold",
      productNameInactive: "text-slate-300",
      productSub: "text-slate-400",
      inputField: "bg-slate-900 border-slate-700 text-white focus:border-red-500",
      tabActive: "bg-red-600 text-white shadow-md",
      tabInactive: "bg-slate-700/60 text-slate-300 hover:bg-slate-700",
      resultBox: "bg-slate-900/60 border-slate-700",
      resultBoxHighlight: "bg-red-950/30 border-red-800/50",
      truckBox: "bg-slate-900/80 border-slate-700",
      unitText: "text-slate-400",
      boldValueText: "text-white",
    },

    // 푸터 (Footer)
    footer: {
      wrapper: "bg-slate-950 text-slate-400 border-t border-slate-800 text-sm",
      brandTitle: "text-white",
      badge: "bg-slate-900 text-slate-300 border-slate-800",
      heading: "text-white font-bold text-base tracking-wide border-b border-slate-800 pb-2",
      phone: "text-white font-mono font-bold text-base hover:text-red-400 transition-colors",
      subText: "text-slate-400",
      box: "p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 space-y-2",
      boxHeading: "font-semibold text-slate-300",
      legalBorder: "border-t border-slate-900 text-xs text-slate-400 space-y-3",
      privacyBox: "p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2",
    },

    // 모바일 플로팅 바 (FloatingBar)
    floatingBar: {
      scrollTopBtn: "bg-slate-900/90 text-white border border-slate-700 shadow-xl hover:bg-red-600",
      bottomBar: "bg-slate-950/95 border-t border-slate-800 shadow-2xl",
      calcBtn: "bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700",
      phoneBtn: "bg-red-600 text-white hover:bg-red-700",
    },
  },
};

/**
 * 활성화된 테마 객체
 */
export const theme = themePresets[CURRENT_THEME];
