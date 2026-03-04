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
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2 md:py-3"
          : "bg-white/95 backdrop-blur-md py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-50">
            <motion.div
              className="bg-gradient-to-br from-primary to-primary-dark p-2 sm:p-2.5 rounded-lg group-hover:from-secondary group-hover:to-secondary transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                VNR Logistics
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600 hidden sm:block">
                Moving Industries Forward
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm xl:text-base font-semibold transition-all duration-200 group ${
                  pathname === link.href
                    ? "text-secondary"
                    : "text-gray-700 hover:text-secondary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-200 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/quote">
              <Button variant="secondary" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                Request a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-[9998]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl lg:hidden overflow-y-auto z-[9999] flex flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b bg-gray-50 flex-shrink-0">
                <h2 className="text-lg font-bold text-primary">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-primary" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-6 flex flex-col gap-3 flex-shrink-0">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                        pathname === link.href
                          ? "bg-secondary/10 text-secondary"
                          : "text-gray-700 hover:bg-gray-100 hover:text-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t flex-shrink-0">
                <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="secondary" size="lg" className="w-full shadow-md">
                    Request a Quote
                  </Button>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="p-6 bg-gray-50 border-t flex-shrink-0 mt-auto">
                <p className="text-xs font-semibold text-gray-600 mb-3">Quick Contact</p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+27729065816" className="block text-gray-700 hover:text-secondary transition-colors">
                    📞 072 906 5816
                  </a>
                  <a href="mailto:Info@vnr.co.za" className="block text-gray-700 hover:text-secondary transition-colors">
                    ✉️ Info@vnr.co.za
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
