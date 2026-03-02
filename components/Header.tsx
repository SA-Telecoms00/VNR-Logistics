"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">VNR Logistics</h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                Moving Industries Forward
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  pathname === link.href
                    ? "text-secondary"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/quote">
              <Button variant="secondary" size="lg">
                Request a Quote
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-secondary ${
                    pathname === link.href
                      ? "text-secondary"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="secondary" size="lg" className="w-full">
                  Request a Quote
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
