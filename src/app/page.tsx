import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingBar from "@/components/common/FloatingBar";
import HeroSection from "@/components/sections/HeroSection";
import CompanySection from "@/components/sections/CompanySection";
import ProductsSection from "@/components/sections/ProductsSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-red-600 selection:text-white">
      {/* Sticky Top Header */}
      <Header />

      {/* Hero Section with factory background and key counters */}
      <HeroSection />

      {/* Company Overview, Strengths & History Timeline */}
      <CompanySection />

      {/* Products & Detailed Specification Tables */}
      <ProductsSection />

      {/* Interactive Material & Pallet Calculator */}
      <CalculatorSection />

      {/* Trust & Certifications (KS, Eco-label, Direct Production) */}
      <CertificationsSection />

      {/* Location, Truck Dispatch Guide & Quotation Form */}
      <LocationSection />

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Action Bar (Mobile Quick Dial & Scroll-to-Top) */}
      <FloatingBar />
    </main>
  );
}
