"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Truck, MessageCircle } from "lucide-react";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg h-16 lg:h-20"
          : "bg-primary shadow-md border-b border-white/10 h-16 lg:h-20 lg:bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div
              className="bg-gradient-to-br from-secondary to-secondary/80 lg:from-primary lg:to-primary-dark p-2 sm:p-2.5 rounded-lg group-hover:from-secondary group-hover:to-secondary transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white lg:text-primary">
                VNR Logistics
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-200 lg:text-gray-600 hidden sm:block">
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
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-[rgba(11,31,58,0.6)] backdrop-blur-md lg:hidden z-[99998]"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ WebkitBackdropFilter: "blur(12px)" }}
            />
            
            {/* Full-Screen Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-primary lg:hidden z-[99999] flex flex-col"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0">
                {/* Logo */}
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group">
                  <div className="bg-gradient-to-br from-secondary to-secondary/80 p-2 rounded-lg">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">VNR Logistics</h2>
                  </div>
                </Link>
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close menu"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-7 w-7 text-white" />
                </motion.button>
              </div>

              {/* Mobile Navigation Links - Centered */}
              <nav className="flex-1 flex flex-col items-center justify-center px-8 space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-center text-2xl sm:text-3xl font-bold transition-all duration-300 py-3 relative group ${
                        pathname === link.href
                          ? "text-secondary"
                          : "text-white hover:text-secondary"
                      }`}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <motion.div
                          layoutId="mobile-active-link"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-secondary rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="px-6 pb-8 space-y-4 flex-shrink-0"
              >
                <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all duration-300"
                  >
                    Request a Quote
                  </motion.button>
                </Link>
                <a
                  href="https://wa.me/27729065816"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
