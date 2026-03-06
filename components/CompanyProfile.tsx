"use client";

import { motion } from "framer-motion";
import { FileText, Download, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompanyProfile() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Download Our Company Profile
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learn more about VNR Logistics, our services, operational areas,
                  and why companies trust us for reliable road freight transport
                  across South Africa.
                </p>
              </div>

              {/* Preview Bullet Points */}
              <div className="space-y-3">
                {[
                  "Road Transport Solutions",
                  "Car Carrier Services",
                  "Container Logistics",
                  "Break Bulk Transport",
                  "Operations in Durban, Johannesburg & Cape Town",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="bg-secondary/10 rounded-full p-1.5">
                      <Truck className="h-4 w-4 text-secondary" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Download Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="bg-gradient-to-br from-primary to-primary-dark w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-3">
                  VNR Logistics Business Profile
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Download our official company profile to learn more about our
                  logistics services and capabilities.
                </p>

                {/* Download Button */}
                <a
                  href="/documents/vnr logistics business profile.pdf"
                  download="VNR-Logistics-Business-Profile.pdf"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl px-6 py-6 h-auto font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Business Profile
                  </Button>
                </a>

                {/* File Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center">
                    PDF | Company Overview | Services | Operational Areas
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
