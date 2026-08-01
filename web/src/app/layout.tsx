import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "BOBO Dental — Modern Oral Care",
  description:
    "Boutique dental care where advanced clinical precision meets personal dedication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen bg-[#f7f6f2] text-[#1c1c1c] font-sans selection:bg-[#3d7068] selection:text-white">
        {/* Fixed Guides */}
        <div className="vertical-guide left-1/4" />
        <div className="vertical-guide left-2/4" />
        <div className="vertical-guide left-3/4" />

        {/* Background Texture */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

        <Header />
        <main className="relative z-10 pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
