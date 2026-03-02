"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  CheckCircle2,
  Truck,
  Car,
  Container,
  Package,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
  const services = [
    {
      icon: Truck,
      title: "Road Freight Transport",
      description:
        "We provide scheduled and dedicated road freight services connecting major trade routes between Durban, Johannesburg, and Cape Town.",
      details:
        "Our fleet ensures secure and timely deliveries for various cargo types.",
      features: [
        "Scheduled and dedicated services",
        "Full and part load options",
        "Real-time tracking",
        "Secure cargo handling",
        "Competitive pricing",
      ],
    },
    {
      icon: Car,
      title: "Car Carrier Division",
      description:
        "Our specialized car carrier division offers safe and professional vehicle transportation services.",
      details: "We prioritize secure loading systems and damage-free transport.",
      features: [
        "Car dealership services",
        "Fleet management solutions",
        "Industrial vehicle transport",
        "Private vehicle movement",
        "Fully insured operations",
      ],
    },
    {
      icon: Container,
      title: "Container Movement",
      description:
        "We handle container transport from ports to inland destinations with efficiency and compliance.",
      details:
        "Professional container logistics for import and export operations.",
      features: [
        "Port collection and delivery",
        "Inter-city container transfer",
        "Industrial container relocation",
        "Empty container repositioning",
        "Customs documentation support",
      ],
    },
    {
      icon: Package,
      title: "Break Bulk Cargo",
      description:
        "For cargo that cannot be containerized, we provide customized break bulk handling solutions.",
      details:
        "Specialized equipment and expertise for oversized and heavy cargo.",
      features: [
        "Safe loading and unloading",
        "Careful route planning",
        "Secure cargo handling",
        "Specialized equipment",
        "Project cargo expertise",
      ],
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About VNR Logistics & Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Your trusted partner in professional road freight solutions across
              South Africa
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Company Overview
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                VNR Logistics is a South African road freight company dedicated
                to delivering reliable and professional transport solutions. We
                serve industries requiring secure and efficient cargo movement
                across major economic regions including Durban, Johannesburg,
                and Cape Town.
              </p>
              <p>
                Our operations are built on punctuality, safety, and strong
                client relationships.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              {...fadeInUp}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg">
                To provide dependable, efficient, and secure logistics solutions
                that empower businesses to operate seamlessly across South
                Africa.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To become a trusted national logistics partner recognized for
                operational excellence, customer satisfaction, and industry
                innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Reliability",
                  description:
                    "Consistent, dependable service you can count on every time",
                },
                {
                  title: "Integrity",
                  description:
                    "Honest, transparent business practices in all our dealings",
                },
                {
                  title: "Efficiency",
                  description:
                    "Optimized operations that save time and reduce costs",
                },
                {
                  title: "Safety",
                  description:
                    "Uncompromising commitment to safe transport practices",
                },
                {
                  title: "Customer Commitment",
                  description:
                    "Dedicated to exceeding client expectations at every turn",
                },
                {
                  title: "Excellence",
                  description:
                    "Continuous improvement and pursuit of the highest standards",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Logistics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive road freight services tailored to industrial and
              commercial clients across South Africa
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary w-16 h-16 rounded-lg flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      {service.description}
                    </p>
                    <p className="text-gray-600">{service.details}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      Service Features:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose VNR Logistics?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We combine industry expertise with a customer-first approach to
              deliver logistics solutions that drive your business forward. Our
              team is committed to providing professional, reliable service
              across all major South African routes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">
                  10+
                </div>
                <p className="text-gray-200">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">3</div>
                <p className="text-gray-200">Major Cities Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">
                  100%
                </div>
                <p className="text-gray-200">Customer Satisfaction Focus</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" variant="secondary">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
