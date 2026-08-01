import Link from "next/link";
import type { Metadata } from "next";
import ServicesExplorer from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services — BOBO Dental",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesExplorer />

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto py-20 md:py-32 border-b border-[#e5e4de] text-center px-6">
        <h3 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter mb-12">
          Ready to refine <br /> your{" "}
          <span className="text-[#B4B4B4] italic">oral health?</span>
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link
            href="/booking"
            className="cta-btn inline-block bg-[#3d7068] text-white font-mono text-[11px] uppercase tracking-[0.25em] px-12 py-6 rounded-[2px]"
          >
            Book Consultation
          </Link>
          <Link
            href="/contact"
            className="font-mono text-[10px] uppercase tracking-[0.3em] border-b border-[#1c1c1c] pb-1 hover:text-[#3d7068] hover:border-[#3d7068] transition-all"
          >
            Inquire About Treatment
          </Link>
        </div>
      </section>
    </>
  );
}
