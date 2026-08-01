import Link from "next/link";
import { clinic } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-[#e5e4de] flex flex-col md:flex-row justify-between items-start gap-16">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-[#1c1c1c] w-6" />
          <span className="font-serif text-[24px] tracking-tight">
            {clinic.name}
          </span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] max-w-xs leading-loose text-[#B4B4B4]">
          {clinic.addressLines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-16 md:gap-24">
        <div>
          <h5 className="font-mono text-[10px] uppercase tracking-[0.3em] mb-8 text-[#B4B4B4]">
            Clinical
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-[#3d7068] transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact#directory"
                className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-[#3d7068] transition-colors"
              >
                Our Doctors
              </Link>
            </li>
            <li>
              <Link
                href="/booking"
                className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-[#3d7068] transition-colors"
              >
                Booking
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-mono text-[10px] uppercase tracking-[0.3em] mb-8 text-[#B4B4B4]">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="#privacy"
                className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-[#3d7068] transition-colors"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="font-mono text-[10px] uppercase tracking-[0.2em] hover:text-[#3d7068] transition-colors"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
