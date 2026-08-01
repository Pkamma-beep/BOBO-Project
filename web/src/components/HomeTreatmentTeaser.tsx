"use client";

import { createElement, useState } from "react";
import Link from "next/link";
import CategoryPills from "@/components/CategoryPills";
import { serviceCategories } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function HomeTreatmentTeaser() {
  const [activeSlug, setActiveSlug] = useState(serviceCategories[0].slug);
  const category =
    serviceCategories.find((c) => c.slug === activeSlug) ??
    serviceCategories[0];

  return (
    <section className="max-w-7xl mx-auto py-20 md:py-32 border-b border-[#e5e4de]">
      <div className="text-center mb-12 md:mb-16 px-6 md:px-12">
        <CategoryPills
          activeSlug={activeSlug}
          onSelect={setActiveSlug}
          className="mb-12"
        />

        <div className="relative border border-[#e5e4de] p-8 md:p-16 text-left overflow-hidden bg-transparent">
          <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
            {createElement(getIcon(category.ghostIcon), {
              size: 320,
              strokeWidth: 1,
            })}
          </div>

          <div className="max-w-3xl mb-12 md:mb-16 relative z-10">
            <h4 className="font-serif text-2xl md:text-4xl mb-6 uppercase tracking-tight">
              {category.heading}
            </h4>
            <p className="font-sans text-base md:text-xl opacity-80 leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 border-t border-[#e5e4de] pt-12">
            {category.benefits.map((benefit) => (
              <div key={benefit.label}>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] block mb-4 text-[#3d7068]">
                  {benefit.label}
                </span>
                <p className="font-sans text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex items-center justify-between relative z-10">
            <Link
              href="/services"
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#3d7068] border-b border-[#3d7068] pb-1 hover:opacity-70 transition-opacity"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
