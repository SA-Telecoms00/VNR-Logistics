"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Truck, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  // Advanced scroll detection: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold for glass effect
      setIsScrolled(currentScrollY > 20);
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      // Always show navbar at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    <motion.header
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
      }}
      transition={{ 
        duration: 0.3, 
        ease: [0.4, 0, 0.2, 1]
      }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-lg border-b border-gray-200/50"
          : "bg-white shadow-sm border-b border-gray-100"
      }`}
      style={{
        WebkitBackdropFilter: isScrolled ? "blur(24px)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Premium Design */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E53935] to-[#C62828] rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-[#E53935] to-[#C62828] p-2.5 rounded-xl shadow-md">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <motion.h1 
                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0B1F3A] to-[#1a3a5c] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                VNR Logistics
              </motion.h1>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium hidden sm:block">
                Moving Industries Forward
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Modern Clean Design */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 group"
                  >
                    <span className={`relative z-10 text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-[#0B1F3A]"
                        : "text-gray-600 group-hover:text-[#0B1F3A]"
                    }`}>
                      {link.label}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-gray-100 rounded-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gray-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#E53935] to-[#C62828] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? "70%" : 0 }}
                      whileHover={{ width: "70%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Desktop CTA - Premium Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/quote">
              <motion.div
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <button className="group relative px-6 py-3 bg-gradient-to-r from-[#E53935] to-[#C62828] text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Request a Quote
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C62828] to-[#B71C1C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button - Elegant Hamburger to X */}
          <motion.button
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors relative z-[100000]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 flex flex-col justify-center items-center">
              <motion.span
                className="w-6 h-0.5 bg-[#0B1F3A] rounded-full block mb-1.5"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#0B1F3A] rounded-full block mb-1.5"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="w-6 h-0.5 bg-[#0B1F3A] rounded-full block"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay - Elegant Dark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md lg:hidden z-[99998]"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ WebkitBackdropFilter: "blur(12px)" }}
            />
            
            {/* Mobile Menu - Clean White Design */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300
              }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white lg:hidden z-[99999] flex flex-col shadow-2xl"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 flex-shrink-0">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2.5 group">
                  <div className="bg-gradient-to-br from-[#E53935] to-[#C62828] p-2 rounded-xl shadow-md">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-[#0B1F3A] to-[#1a3a5c] bg-clip-text text-transparent">VNR Logistics</h2>
                  </div>
                </Link>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-6 h-6 relative">
                    <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-700 rounded-full rotate-45"></span>
                    <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-700 rounded-full -rotate-45"></span>
                  </div>
                </motion.button>
              </div>

              {/* Mobile Navigation Links - Clean List */}
              <nav className="flex-1 px-6 py-8 overflow-y-auto">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#E53935] to-[#C62828] text-white shadow-md"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>

              {/* Bottom CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="px-6 pb-8 space-y-3 flex-shrink-0 border-t border-gray-200 pt-6"
              >
                <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#E53935] to-[#C62828] text-white font-bold text-base py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
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
                    className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-base py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
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
    </motion.header>
  );
}
