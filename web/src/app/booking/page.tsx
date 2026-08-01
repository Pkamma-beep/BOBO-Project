import type { Metadata } from "next";
import BookingFlow from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Booking — BOBO Dental",
};

export default function BookingPage() {
  return (
    <div className="pb-16 md:pb-32 pt-4 md:pt-16">
      <BookingFlow />
    </div>
  );
}
