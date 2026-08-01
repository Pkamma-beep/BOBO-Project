import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact — BOBO Dental",
};

export default function ContactPage() {
  return <ContactSection />;
}
