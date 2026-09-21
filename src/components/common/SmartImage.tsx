"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Box, Layers, Award, Building2, CheckCircle2, ShieldCheck, Factory } from "lucide-react";

interface SmartImageProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  category?: "brick" | "block" | "cert" | "hero" | "logo" | "retaining" | "material";
  fallbackUnsplash?: string;
  className?: string;
  aspectRatio?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function SmartImage({
  src,
  alt,
  title,
  subtitle,
  category = "block",
  fallbackUnsplash,
  className = "",
  aspectRatio = "aspect-[4/3]",
  fill = false,
  priority = false,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Category specific icon & styling
  const renderCategoryIcon = () => {
    switch (category) {
      case "brick":
        return <Layers className="w-10 h-10 text-red-600/80 mb-2 stroke-[1.5]" />;
      case "block":
        return <Box className="w-11 h-11 text-slate-700 dark:text-slate-300 mb-2 stroke-[1.5]" />;
      case "cert":
        return <Award className="w-11 h-11 text-blue-600 mb-2 stroke-[1.5]" />;
      case "hero":
        return <Factory className="w-14 h-14 text-white/80 mb-3 stroke-[1.5]" />;
      case "retaining":
        return <Building2 className="w-10 h-10 text-slate-600 mb-2 stroke-[1.5]" />;
      default:
        return <Box className="w-10 h-10 text-slate-600 mb-2 stroke-[1.5]" />;
    }
  };

  const getUnsplashFallback = () => {
    if (fallbackUnsplash) return fallbackUnsplash;
    switch (category) {
      case "hero":
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop";
      case "brick":
        return "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop";
      case "block":
        return "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop";
      case "retaining":
        return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop";
      default:
        return null;
    }
  };

  const unsplashUrl = getUnsplashFallback();

  return (
    <div
      className={`relative overflow-hidden ${
        category === "hero" ? "bg-slate-900" : "bg-slate-100 dark:bg-slate-900"
      } select-none group ${aspectRatio} ${className}`}
    >
      {/* 1. Actual image attempt using standard img with onError fallback */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading={priority ? "eager" : "lazy"}
        />
      )}

      {/* 2. Fallback UI when file does not exist yet */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          {/* Subtle industrial background pattern or Unsplash backdrop */}
          {unsplashUrl && category !== "cert" && category !== "logo" ? (
            <div className="absolute inset-0 z-0">
              <img
                src={unsplashUrl}
                alt="산업용 임시 이미지"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-950/60" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-900 dark:via-slate-850 dark:to-slate-950 border border-slate-200 dark:border-slate-800">
              {/* Subtle Blueprint Grid */}
              <div
                className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          )}

          {/* Foreground placeholder content */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-[85%] mx-auto">
            {/* Category Icon */}
            <div className="p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm border border-white/40 dark:border-slate-700/50 mb-2.5">
              {renderCategoryIcon()}
            </div>

            {/* Title & Dimension */}
            <h4
              className={`font-bold tracking-tight mb-1 text-balance ${
                unsplashUrl && category !== "cert"
                  ? "text-white text-base md:text-lg drop-shadow"
                  : "text-slate-800 dark:text-slate-100 text-sm md:text-base"
              }`}
            >
              {title || alt}
            </h4>

            {subtitle && (
              <p
                className={`text-xs font-mono mb-2.5 ${
                  unsplashUrl && category !== "cert"
                    ? "text-slate-200"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {subtitle}
              </p>
            )}

            {/* Smart Path Label Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/10 dark:bg-white/10 text-slate-700 dark:text-slate-300 backdrop-blur-md border border-slate-300/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>실사 경로 매칭: {src.split("/").pop()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
