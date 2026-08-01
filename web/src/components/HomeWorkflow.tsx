"use client";

import { useState } from "react";
import Image from "next/image";

const STEPS = [
  {
    number: "01",
    title: "Book Your Visit",
    description:
      "Schedule your initial consultation through our seamless online portal or a brief phone call.",
  },
  {
    number: "02",
    title: "Meet Your Dentist",
    description:
      "A detailed conversation about your goals and a comprehensive digital diagnostic evaluation.",
  },
  {
    number: "03",
    title: "Personalized Treatment",
    description:
      "We execute your curated care plan using state-of-the-art non-invasive technologies.",
  },
];

export default function HomeWorkflow() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto border-b border-[#e5e4de] grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
      <div className="p-8 md:p-24 border-[#e5e4de] md:border-r flex flex-col justify-center">
        <div className="space-y-12 md:space-y-16">
          {STEPS.map((step, i) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActive(i)}
              className={`group text-left cursor-pointer transition-opacity duration-700 ${
                active === i ? "opacity-100" : "opacity-40 hover:opacity-100"
              }`}
            >
              <div
                className={`font-mono text-[12px] mb-4 tracking-widest ${
                  active === i ? "text-[#3d7068]" : ""
                }`}
              >
                {step.number}
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-[#1c1c1c] leading-relaxed max-w-sm">
                {step.description}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center p-8 md:p-12">
        <div className="md:sticky md:top-40 w-full aspect-4/5 border border-[#e5e4de] bg-[#e5e4de] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
              alt="Treatment Room"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover grayscale opacity-60 mix-blend-multiply"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e5e4de] overflow-hidden">
              <div className="scanline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
