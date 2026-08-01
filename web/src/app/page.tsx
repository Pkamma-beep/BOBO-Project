import Link from "next/link";
import { CalendarCheck, Users, Star, PhoneCall } from "lucide-react";
import WordReveal from "@/components/WordReveal";
import HomeWorkflow from "@/components/HomeWorkflow";
import HomeTreatmentTeaser from "@/components/HomeTreatmentTeaser";
import { clinic } from "@/lib/data";

const STATS = [
  { icon: CalendarCheck, value: "15+", label: "Years of Care" },
  { icon: Users, value: "12,000+", label: "Patients Treated" },
  { icon: Star, value: "4.9/5", label: "Patient Rating" },
];

const MISSION_SEGMENTS = [
  "At BOBO Dental, we believe",
  " that modern dentistry",
  " should be as comfortable",
  " as it is technologically advanced.",
  " Our philosophy is simple:",
  " patient first,",
  " technique always,",
  " transparency throughout.",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center border-b border-[#e5e4de]">
        <div className="inline-flex items-center gap-3 border border-[#e5e4de] px-4 py-2 rounded-[2px] mb-10 md:mb-12">
          <div className="pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Now accepting new patients
          </span>
        </div>

        <h1 className="font-serif text-[13vw] sm:text-[9vw] leading-[0.95] tracking-tight uppercase mb-8 font-light">
          A Healthier Smile <br />
          <span className="text-[#B4B4B4] italic">Is Precise</span> Artistry
        </h1>

        <p className="max-w-2xl mx-auto font-sans text-base md:text-lg mb-10 md:mb-12 opacity-80">
          Experience boutique dental care where advanced clinical precision
          meets personal dedication. We don&apos;t just treat teeth; we curate
          your oral health journey.
        </p>

        <Link
          href="/booking"
          className="cta-btn inline-block bg-[#3d7068] text-white font-mono text-[11px] uppercase tracking-[0.25em] px-10 py-5 rounded-[2px] w-full max-w-[320px] sm:w-auto"
        >
          Book Appointment
        </Link>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto border-b border-[#e5e4de] grid grid-cols-1 md:grid-cols-3">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`p-12 border-[#e5e4de] flex flex-col items-center text-center group transition-colors duration-700 hover:bg-white ${
              i < STATS.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
            }`}
          >
            <div className="w-12 h-12 border border-[#e5e4de] flex items-center justify-center mb-6">
              <stat.icon size={20} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-5xl mb-2">{stat.value}</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B4B4B4]">
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* Mission Statement (Scroll Reveal) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-[#e5e4de]">
        <WordReveal
          segments={MISSION_SEGMENTS}
          className="font-serif text-3xl md:text-4xl lg:text-6xl leading-[1.2] max-w-5xl"
        />
        <div className="mt-12 flex items-center gap-6">
          <div className="h-px bg-[#1c1c1c] w-16" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Our Philosophy
          </span>
        </div>
      </section>

      {/* Interactive Workflow */}
      <HomeWorkflow />

      {/* Treatment Categories Teaser */}
      <HomeTreatmentTeaser />

      {/* Booking Form Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 border-b border-[#e5e4de]">
        <div className="p-8 md:p-24 border-[#e5e4de] md:border-r">
          <h2 className="font-serif text-4xl md:text-[6vw] leading-tight uppercase mb-8">
            Book A Visit
          </h2>
          <p className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#B4B4B4] mb-12">
            Your journey to precision <br /> oral care begins here.
          </p>
          <div className="flex items-center gap-8">
            <div className="h-12 w-12 border border-[#e5e4de] flex items-center justify-center">
              <PhoneCall size={20} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
                Direct line
              </p>
              <p className="font-serif text-xl">{clinic.phone}</p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-24 bg-white">
          <form className="space-y-12">
            <input
              type="text"
              placeholder="FULL NAME"
              className="w-full bg-transparent border-b border-[#e5e4de] py-4 focus:outline-none focus:border-[#3d7068] font-mono text-[11px] placeholder:text-[#B4B4B4] uppercase tracking-[0.2em] transition-colors"
            />
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full bg-transparent border-b border-[#e5e4de] py-4 focus:outline-none focus:border-[#3d7068] font-mono text-[11px] placeholder:text-[#B4B4B4] uppercase tracking-[0.2em] transition-colors"
            />
            <input
              type="text"
              placeholder="PREFERRED DATE (MM/DD/YYYY)"
              className="w-full bg-transparent border-b border-[#e5e4de] py-4 focus:outline-none focus:border-[#3d7068] font-mono text-[11px] placeholder:text-[#B4B4B4] uppercase tracking-[0.2em] transition-colors"
            />
            <button
              type="submit"
              className="cta-btn w-full bg-[#3d7068] text-white font-mono text-[12px] uppercase tracking-[0.4em] py-6 shadow-[0_4px_0_0_rgba(61,112,104,0.1)]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
