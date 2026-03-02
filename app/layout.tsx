import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VNR Logistics | Professional Road Freight Transport South Africa",
  description: "VNR Logistics provides reliable road freight solutions across South Africa. Specializing in general freight, car carrier transport, container movement, and break bulk cargo between Durban, Johannesburg, and Cape Town.",
  keywords: "logistics transport South Africa, road freight Durban Johannesburg Cape Town, car carrier services South Africa, container movement transport, break bulk cargo transport",
  openGraph: {
    title: "VNR Logistics | Professional Road Freight Transport",
    description: "Reliable logistics solutions connecting Durban, Johannesburg, and Cape Town",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
