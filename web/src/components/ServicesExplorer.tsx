"use client";

import { createElement, useState } from "react";
import CategoryPills from "@/components/CategoryPills";
import { serviceCategories } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function ServicesExplorer() {
  const [activeSlug, setActiveSlug] = useState(serviceCategories[0].slug);
  const category =
    serviceCategories.find((c) => c.slug === activeSlug) ??
    serviceCategories[0];

  return (
    <>
      <header className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#e5e4de] text-center">
        <div className="inline-flex items-center gap-3 border border-[#e5e4de] px-4 py-2 rounded-[2px] mb-10 md:mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Advanced Oral Care Philosophy
          </span>
        </div>

        <h1 className="font-serif text-[11vw] sm:text-[9vw] leading-[0.95] tracking-tight uppercase mb-8 font-light">
          Our Clinical <br />
          <span className="text-[#B4B4B4] italic">Specialties</span>
        </h1>

        <p className="max-w-2xl mx-auto font-sans text-base md:text-lg opacity-80 mb-14 md:mb-20">
          From foundational health to aesthetic mastery, we offer a
          comprehensive spectrum of dental services performed with
          microscopic precision.
        </p>

        <CategoryPills activeSlug={activeSlug} onSelect={setActiveSlug} />
      </header>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-[#e5e4de]">
        <div className="relative hairline-a p-8 md:p-20 overflow-hidden bg-[#f7f6f2]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
            {createElement(getIcon(category.ghostIcon), {
              size: 240,
              strokeWidth: 1,
            })}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-none uppercase">
                {category.heading}
              </h2>
              <p className="font-serif text-lg md:text-2xl leading-relaxed opacity-90">
                {category.description}
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="h-px bg-[#1c1c1c] w-12" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                  The BOBO Standard
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {category.features.map((feature) => (
                <div key={feature.title} className="space-y-4">
                  <div className="w-8 h-8 hairline-a flex items-center justify-center text-[#3d7068]">
                    {createElement(getIcon(feature.icon), {
                      size: 16,
                      strokeWidth: 1.5,
                    })}
                  </div>
                  <h4 className="font-serif text-xl">{feature.title}</h4>
                  <p className="font-sans text-sm opacity-70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-16 border-t border-[#e5e4de] grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {category.benefits.map((benefit) => (
              <div key={benefit.label}>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] block mb-4 text-[#3d7068]">
                  {benefit.label}
                </span>
                <p className="font-sans text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
