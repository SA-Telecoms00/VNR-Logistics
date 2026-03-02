"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              Your privacy is important to us
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto prose prose-lg" {...fadeInUp}>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Privacy Statement
              </h2>
              <p className="text-gray-700 mb-6">
                VNR Logistics respects your privacy. Any information submitted
                through our website is used strictly for communication and
                service purposes. We do not share or sell personal information
                to third parties.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3">
                Information We Collect
              </h3>
              <p className="text-gray-700 mb-6">
                When you contact us or request a quote, we collect information
                such as your name, email address, phone number, company name,
                and details about your logistics requirements. This information
                is used solely to provide you with our services and respond to
                your inquiries.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3">
                How We Use Your Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>To respond to your inquiries and quote requests</li>
                <li>To provide logistics services</li>
                <li>To communicate about your shipments</li>
                <li>To improve our services</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-3">
                Data Security
              </h3>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3">
                Contact Us
              </h3>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please
                contact us at info@vnrlogistics.co.za
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
