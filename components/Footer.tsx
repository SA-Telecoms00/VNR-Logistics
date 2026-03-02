"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer>
      {/* Pre-Footer CTA Banner */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Move Your Vehicles or Cargo?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Partner with VNR Logistics for secure, professional transport
              solutions across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto w-full sm:w-auto"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/27729065816"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-[#0A1628] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-2.5 rounded-lg">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">VNR Logistics</h3>
                  <p className="text-sm text-gray-400">Moving Industries Forward</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional road freight solutions across South Africa. Connecting
                Durban, Johannesburg, and Cape Town with reliability and precision
                since 2018.
              </p>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {[
                  { name: "Road Freight", href: "/about" },
                  { name: "Car Carrier Division", href: "/about" },
                  { name: "Container Movement", href: "/about" },
                  { name: "Break Bulk Cargo", href: "/about" },
                  { name: "Request a Quote", href: "/quote" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-secondary transition-colors duration-200 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-secondary transition-all">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Coverage & Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Coverage & Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    <p className="font-semibold text-white mb-1">Durban Office</p>
                    <p className="text-sm">7 Corbrik Road, Queen Nandi Drive</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    <p className="font-semibold text-white mb-1">Johannesburg Office</p>
                    <p className="text-sm">Corner Lombardi & R55 Truck Stop</p>
                    <p className="text-sm">Waterfall Rd, Centurion, 0187</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <a
                    href="tel:+27729065816"
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    072 906 5816
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                  <a
                    href="mailto:Info@vnr.co.za"
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Info@vnr.co.za
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <a
                    href="https://wa.me/27729065816"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "Privacy Policy", href: "/privacy" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-secondary transition-colors duration-200 inline-block group"
                    >
                      <span className="border-b border-transparent group-hover:border-secondary transition-all">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center space-y-2">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} VNR Logistics. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Designed & Developed by SA Telecoms
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
