"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
import { companyData } from "@/data/company";

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
        isScrolled
          ? "bg-slate-900/95 text-white backdrop-blur-md shadow-md py-3"
          : "bg-slate-900 text-white py-4 border-b border-slate-800"
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
              <span className="font-extrabold text-lg tracking-tight text-white">
                남경콘크리트<span className="text-red-500">(주)</span>
              </span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 hidden sm:inline-block">
                KS인증공장
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-wider -mt-0.5">
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
                  ? "bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/20"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/80"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:055-582-4346"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-md shadow-red-600/25 transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <div className="text-left">
              <span className="text-[10px] block text-red-200 leading-none">빠른 견적/배차 문의</span>
              <span className="font-mono text-sm leading-tight font-bold">TEL 055-582-4346~7</span>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-3">
            <a
              href="tel:055-582-4346"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 text-white font-bold text-base shadow-lg shadow-red-600/30"
            >
              <Phone className="w-5 h-5" />
              <span>전화 상담 바로 연결 (055-582-4346~7)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
