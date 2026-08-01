"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { doctors, clinic } from "@/lib/data";

export default function ContactSection() {
  const [attentionTo, setAttentionTo] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleContactDoctor = (name: string) => {
    setAttentionTo(name);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start border-b border-[#e5e4de] pb-20 md:pb-32">
        {/* Left Column: Info */}
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-8">
            <h1 className="font-serif text-[13vw] sm:text-[8vw] lg:text-[6vw] leading-[0.9] tracking-tight uppercase font-light">
              Get in <br />
              <span className="italic text-[#B4B4B4]">Touch</span>
            </h1>
            <p className="font-sans text-lg md:text-xl opacity-80 max-w-md">
              We&apos;re here to answer any questions about our procedures,
              insurance coverage, or specific dental concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 border-t border-[#e5e4de] pt-12">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B4B4B4] mb-4">
                Clinic Address
              </h3>
              <address className="font-mono text-[12px] not-italic leading-relaxed">
                {clinic.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B4B4B4] mb-4">
                Hours
              </h3>
              <p className="font-mono text-[12px] uppercase leading-relaxed">
                {clinic.hours.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B4B4B4] mb-4">
                Contact Info
              </h3>
              <p className="font-mono text-[12px] leading-relaxed">
                {clinic.phone}
                <br />
                {clinic.email}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div
          ref={formRef}
          className="bg-white p-8 md:p-12 lg:p-20 shadow-[20px_20px_0_0_#3d7068] md:shadow-[40px_40px_0_0_#3d7068]"
        >
          <form className="space-y-10 md:space-y-12">
            {attentionTo && (
              <div className="flex items-center justify-between border border-[#e5e4de] px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3d7068]">
                  Attn: {attentionTo}
                </span>
                <button
                  type="button"
                  onClick={() => setAttentionTo(null)}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B4B4B4] hover:text-[#1c1c1c]"
                >
                  Clear
                </button>
              </div>
            )}
            <input
              type="text"
              placeholder="FULL NAME"
              className="w-full bg-transparent border-b border-[#e5e4de] py-4 focus:outline-none focus:border-[#3d7068] font-mono text-[10px] placeholder:text-[#B4B4B4] uppercase tracking-[0.2em] transition-colors"
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full bg-transparent border-b border-[#e5e4de] py-4 focus:outline-none focus:border-[#3d7068] font-mono text-[10px] placeholder:text-[#B4B4B4] uppercase tracking-[0.2em] transition-colors"
            />
            <textarea
              rows={4}
              placeholder="YOUR MESSAGE"
              className="w-full bg-transparent border-b border-[#e5e4de] py-4 focus:outline-none focus:border-[#3d7068] font-mono text-[10px] placeholder:text-[#B4B4B4] uppercase tracking-[0.2em] transition-colors resize-none"
            />
            <button
              type="submit"
              className="cta-btn w-full bg-[#3d7068] text-white font-mono text-[11px] uppercase tracking-[0.4em] py-6 shadow-[0_4px_0_0_#3d7068] hover:shadow-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Directory Section */}
      <section id="directory" className="py-20 md:py-32">
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <div className="h-px bg-[#1c1c1c] w-16" />
          <h2 className="font-mono text-[10px] uppercase tracking-[0.4em]">
            Meet Our Doctors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e4de] border border-[#e5e4de]">
          {doctors.map((doc) => (
            <div
              key={doc.slug}
              className="bg-[#f7f6f2] p-8 md:p-12 space-y-8 flex flex-col"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-[#1c1c1c]">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover grayscale opacity-60 mix-blend-multiply"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="font-serif text-3xl">{doc.name}</h3>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#3d7068]">
                  {doc.specialty}
                </span>
                <p className="font-sans text-sm opacity-70 leading-relaxed">
                  {doc.bio}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleContactDoctor(doc.name)}
                className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] border border-[#1c1c1c] px-6 py-4 text-center hover:bg-[#1c1c1c] hover:text-white transition-all"
              >
                Contact Dr. {doc.name.split(" ").at(-1)}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
