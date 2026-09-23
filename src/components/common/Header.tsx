"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Download, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
import { companyData } from "@/data/company";
import { theme } from "@/config/theme";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "회사소개", href: "#about" },
    { name: "제품 및 규격표", href: "#products" },
    { name: "물량 계산기", href: "#calculator", highlight: true },
    { name: "보유인증", href: "#certifications" },
    { name: "배차 및 오시는길", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? theme.header.wrapperScrolled : theme.header.wrapperStatic
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & CI */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/pic/logo/symbol.png"
              alt="남경콘크리트 심볼"
              width={40}
              height={40}
              priority
              className="w-10 h-10 object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className={`font-extrabold text-lg tracking-tight ${theme.header.logoTitle}`}>
                남경콘크리트<span className="text-red-500">(주)</span>
              </span>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded hidden sm:inline-block border ${theme.header.logoBadge}`}>
                KS인증공장
              </span>
            </div>
            <p className={`text-[11px] font-mono tracking-wider -mt-0.5 ${theme.header.logoSub}`}>
              NAMKYUNG CONCRETE
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                link.highlight
                  ? theme.header.navLinkHighlight
                  : theme.header.navLink
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call to Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="tel:055-582-4346"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>055-582-4346</span>
          </a>
          <a
            href="/docs/catalog.pdf"
            download="남경콘크리트 카달로그.pdf"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium px-4 py-2 rounded-lg text-sm transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>카달로그 다운로드</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg focus:outline-none transition-colors ${theme.header.mobileBtn}`}
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-2 ${theme.header.mobileDrawer}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${theme.header.mobileDrawerLink}`}
            >
              <span>{link.name}</span>
              <ChevronRight className={`w-4 h-4 ${theme.header.mobileDrawerArrow}`} />
            </a>
          ))}
          <div className="pt-3 space-y-2">
            <a
              href="tel:055-582-4346"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 text-white font-bold text-base shadow-lg shadow-red-600/30"
            >
              <Phone className="w-5 h-5" />
              <span>전화 상담 바로 연결 (055-582-4346)</span>
            </a>
            <a
              href="/docs/catalog.pdf"
              download="남경콘크리트 카달로그.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-medium text-sm shadow-sm"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>카달로그 다운로드</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
