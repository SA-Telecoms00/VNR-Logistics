"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Car,
  Shield,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function CarCarrierPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <Car className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Car Carrier Division
            </h1>
            <p className="text-xl text-gray-100">
              Specialized vehicle transportation services with professional care
              and secure handling across South Africa
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center mb-12" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Professional Vehicle Transport Solutions
            </h2>
            <p className="text-lg text-gray-700">
              Our specialized car carrier division offers safe and professional
              vehicle transportation services across South Africa. We prioritize
              secure loading systems and damage-free transport for every vehicle
              in our care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Car,
                title: "Car Dealerships",
                description:
                  "Reliable transport solutions for new and used vehicle inventory between dealerships and auction houses.",
              },
              {
                icon: Truck,
                title: "Fleet Management",
                description:
                  "Efficient relocation services for corporate and rental fleet vehicles across multiple locations.",
              },
              {
                icon: Shield,
                title: "Industrial Clients",
                description:
                  "Specialized handling for company vehicles, machinery, and equipment requiring professional transport.",
              },
              {
                icon: MapPin,
                title: "Private Vehicle Movement",
                description:
                  "Safe and secure transport for private vehicle owners relocating or purchasing vehicles remotely.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Choose Our Car Carrier Service?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Secure Loading Systems",
                  description:
                    "State-of-the-art equipment ensures vehicles are safely secured during transport.",
                },
                {
                  icon: CheckCircle2,
                  title: "Damage-Free Guarantee",
                  description:
                    "Comprehensive insurance and careful handling protocols protect every vehicle.",
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  description:
                    "Reliable schedules and professional drivers ensure on-time arrivals.",
                },
                {
                  icon: Truck,
                  title: "Modern Fleet",
                  description:
                    "Well-maintained car carriers equipped for various vehicle types and sizes.",
                },
                {
                  icon: MapPin,
                  title: "Nationwide Routes",
                  description:
                    "Regular services between Durban, Johannesburg, and Cape Town.",
                },
                {
                  icon: Car,
                  title: "Vehicle Expertise",
                  description:
                    "Experienced team trained in handling luxury, commercial, and specialty vehicles.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Our Transport Process
              </h2>
              <p className="text-center text-gray-200 mb-8">
                Simple, transparent, and professional vehicle transport
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Request Quote",
                    description: "Contact us with vehicle details and route",
                  },
                  {
                    step: "2",
                    title: "Schedule Pickup",
                    description: "We arrange convenient collection time",
                  },
                  {
                    step: "3",
                    title: "Secure Transport",
                    description: "Safe loading and professional delivery",
                  },
                  {
                    step: "4",
                    title: "Delivery",
                    description: "Vehicle arrives safely at destination",
                  },
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transport Your Vehicles?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Get a competitive quote for professional car carrier services
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" variant="secondary">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/27XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
