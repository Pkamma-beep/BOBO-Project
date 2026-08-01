"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { serviceCategories, doctors, timeSlots } from "@/lib/data";
import { MONTH_NAMES, getCalendarGrid, isSameDate, isSameMonth } from "@/lib/calendar";

const WEEKDAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

const PROGRESS_BY_STEP = { 1: 25, 2: 50, 3: 75, 4: 100 };

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export default function BookingFlow() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [categorySlug, setCategorySlug] = useState<string | null>(null);
  const [doctorSlug, setDoctorSlug] = useState<string | null>(null);
  const today = startOfMonth(new Date());
  const [viewMonth, setViewMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState<string | null>(null);

  const stepRefs = useRef<Partial<Record<1 | 2 | 3 | 4, HTMLElement | null>>>(
    {}
  );
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    stepRefs.current[step]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [step]);

  const { leadingDays, currentDays, trailingDays } = getCalendarGrid(
    viewMonth.getFullYear(),
    viewMonth.getMonth()
  );
  const isAtEarliestMonth = isSameMonth(viewMonth, today);

  const goToPrevMonth = () => {
    if (isAtEarliestMonth) return;
    setViewMonth(
      (d) => new Date(d.getFullYear(), d.getMonth() - 1, 1)
    );
  };
  const goToNextMonth = () =>
    setViewMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  const category =
    serviceCategories.find((c) => c.slug === categorySlug) ??
    serviceCategories[0];
  const doctor = doctors.find((d) => d.slug === doctorSlug) ?? doctors[0];

  return (
    <>
      {/* Progress Bar */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] mb-4 text-[#B4B4B4]">
          <span>Initialization</span>
          <span>Verification</span>
        </div>
        <div className="w-full h-px bg-[#e5e4de] relative">
          <div
            className="scanline-progress"
            style={{ width: `${PROGRESS_BY_STEP[step]}%` }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
        {/* Step 01: Choose Service */}
        <section
          ref={(el) => {
            stepRefs.current[1] = el;
          }}
          className={`scroll-mt-28 transition-opacity duration-700 ${
            step === 1 ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className="flex items-baseline gap-6 mb-10 md:mb-12">
            <span
              className={`font-mono text-2xl ${
                step === 1 ? "text-[#3d7068]" : ""
              }`}
            >
              01
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase">
              Choose Treatment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => {
                  setCategorySlug(cat.slug);
                  setStep(2);
                }}
                className={`group text-left p-8 border transition-all bg-white/50 ${
                  categorySlug === cat.slug
                    ? "border-[#3d7068]"
                    : "border-[#e5e4de] hover:border-[#3d7068]"
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B4B4B4] mb-4 block">
                  {cat.bookingCode}
                </span>
                <h3 className="font-serif text-2xl mb-2">{cat.label}</h3>
                <p className="font-sans text-sm opacity-60 leading-relaxed">
                  {cat.bookingBlurb}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Step 02: Choose Doctor */}
        <section
          ref={(el) => {
            stepRefs.current[2] = el;
          }}
          className={`scroll-mt-28 transition-opacity duration-700 ${
            step === 2 ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className="flex items-baseline gap-6 mb-10 md:mb-12">
            <span
              className={`font-mono text-2xl ${
                step === 2 ? "text-[#3d7068]" : ""
              }`}
            >
              02
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase">
              Choose Practitioner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <button
                key={doc.slug}
                type="button"
                onClick={() => {
                  setDoctorSlug(doc.slug);
                  setStep(3);
                }}
                className={`group relative border overflow-hidden bg-white transition-all text-left ${
                  doctorSlug === doc.slug
                    ? "border-[#3d7068]"
                    : "border-[#e5e4de] hover:border-[#3d7068]"
                }`}
              >
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover grayscale opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-1">{doc.name}</h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#B4B4B4]">
                    {doc.specialty}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Step 03: Choose Date and Time */}
        <section
          ref={(el) => {
            stepRefs.current[3] = el;
          }}
          className={`scroll-mt-28 transition-opacity duration-700 ${
            step === 3 ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className="flex items-baseline gap-6 mb-10 md:mb-12">
            <span
              className={`font-mono text-2xl ${
                step === 3 ? "text-[#3d7068]" : ""
              }`}
            >
              03
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase">
              Select Schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="border border-[#e5e4de] p-8 bg-white/50">
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  {MONTH_NAMES[viewMonth.getMonth()]} {viewMonth.getFullYear()}
                </span>
                <div className="flex gap-4">
                  <button
                    type="button"
                    aria-label="Previous month"
                    onClick={goToPrevMonth}
                    disabled={isAtEarliestMonth}
                    className={`transition-colors ${
                      isAtEarliestMonth
                        ? "text-[#e5e4de] cursor-not-allowed"
                        : "text-[#B4B4B4] hover:text-[#3d7068] cursor-pointer"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={goToNextMonth}
                    className="text-[#B4B4B4] hover:text-[#3d7068] transition-colors cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-y-4 text-center mb-4">
                {WEEKDAYS.map((wd) => (
                  <div
                    key={wd}
                    className="font-mono text-[8px] text-[#B4B4B4]"
                  >
                    {wd}
                  </div>
                ))}
                {leadingDays.map((d) => (
                  <div
                    key={`leading-${d}`}
                    className="py-2 font-mono text-xs text-[#B4B4B4]"
                  >
                    {String(d).padStart(2, "0")}
                  </div>
                ))}
                {currentDays.map((d) => {
                  const cellDate = new Date(
                    viewMonth.getFullYear(),
                    viewMonth.getMonth(),
                    d
                  );
                  const active = isSameDate(cellDate, selectedDate);
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(cellDate)}
                      className={`py-2 font-mono text-xs transition-colors ${
                        active
                          ? "font-bold text-[#3d7068] ring-1 ring-[#3d7068] bg-white"
                          : "hover:text-[#3d7068]"
                      }`}
                    >
                      {String(d).padStart(2, "0")}
                    </button>
                  );
                })}
                {trailingDays.map((d) => (
                  <div
                    key={`trailing-${d}`}
                    className="py-2 font-mono text-xs text-[#B4B4B4]"
                  >
                    {String(d).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest mb-8 text-[#B4B4B4]">
                Available Slots
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => {
                      setTime(slot);
                      setStep(4);
                    }}
                    className={`py-4 border font-mono text-xs transition-all ${
                      time === slot
                        ? "border-[#3d7068] bg-white"
                        : "border-[#e5e4de] hover:border-[#3d7068] hover:bg-white"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 04: Confirm */}
        <section
          ref={(el) => {
            stepRefs.current[4] = el;
          }}
          className={`scroll-mt-28 transition-opacity duration-700 ${
            step === 4 ? "opacity-100" : "opacity-40"
          }`}
        >
          <div className="flex items-baseline gap-6 mb-10 md:mb-12">
            <span
              className={`font-mono text-2xl ${
                step === 4 ? "text-[#3d7068]" : ""
              }`}
            >
              04
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase">
              Confirm Appointment
            </h2>
          </div>

          <div className="border border-[#e5e4de] p-8 md:p-12 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B4B4B4] block mb-4">
                  Booking Detail
                </span>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-[#e5e4de] pb-4">
                    <span className="font-sans text-sm">Treatment</span>
                    <span className="font-serif italic text-lg">
                      {category.label}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e4de] pb-4">
                    <span className="font-sans text-sm">Practitioner</span>
                    <span className="font-serif italic text-lg">
                      {doctor.name}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#e5e4de] pb-4">
                    <span className="font-sans text-sm">Date &amp; Time</span>
                    <span className="font-serif italic text-lg">
                      {MONTH_NAMES[selectedDate.getMonth()].slice(0, 3)}{" "}
                      {String(selectedDate.getDate()).padStart(2, "0")}
                      {time ? `, ${time}` : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-sm text-[#B4B4B4] mb-8 leading-relaxed">
                  By confirming, you agree to our 24-hour cancellation policy.
                  A confirmation email with clinical instructions will be sent
                  to your primary address.
                </p>
                <button
                  type="button"
                  className="cta-btn block text-center bg-[#3d7068] text-white font-mono text-[12px] uppercase tracking-[0.4em] py-6 rounded-[2px]"
                >
                  Finalize Booking
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
