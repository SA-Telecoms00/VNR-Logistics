"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Truck,
  Car,
  Container,
  Package,
  CheckCircle2,
  MapPin,
  Clock,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              Reliable Road Freight Across South Africa
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-200"
              variants={fadeInUp}
            >
              Professional logistics solutions connecting Durban, Johannesburg,
              and Cape Town with speed, safety, and precision.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/27XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Moving Industries Forward
            </h2>
            <p className="text-lg text-gray-700">
              At VNR Logistics, we specialize in dependable road freight
              solutions tailored to commercial and industrial clients. From
              container movement to specialized vehicle transport, we ensure
              every load reaches its destination securely and on time.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Our commitment is simple: efficiency, reliability, and
              professional service you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions designed for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Road Freight Transport",
                description:
                  "Efficient long-distance cargo transportation between major South African hubs.",
              },
              {
                icon: Car,
                title: "Car Carrier Division",
                description:
                  "Specialized vehicle transport solutions for dealerships, fleet operators, and industrial clients.",
              },
              {
                icon: Container,
                title: "Container Movement",
                description:
                  "Secure handling and transport of shipping containers across major ports and inland destinations.",
              },
              {
                icon: Package,
                title: "Break Bulk Cargo",
                description:
                  "Professional handling of non-containerized cargo requiring specialized care.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/about">
              <Button size="lg" variant="secondary">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="inline-block bg-secondary text-white text-sm px-4 py-1 rounded-full mb-4">
                  Featured Service
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Car Carrier Division
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our specialized car carrier division offers safe and professional
                  vehicle transportation services across South Africa. We prioritize
                  secure loading systems and damage-free transport for every vehicle
                  in our care.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Car dealership services",
                    "Fleet management solutions",
                    "Industrial vehicle transport",
                    "Private vehicle movement",
                    "Fully insured operations",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/about">
                  <Button size="lg" variant="secondary">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-12 rounded-2xl shadow-2xl">
                  <Car className="h-16 w-16 text-secondary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Professional Vehicle Transport
                  </h3>
                  <p className="text-gray-200 mb-6">
                    Trusted by dealerships, fleet operators, and industrial clients
                    for secure, damage-free vehicle transportation.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <Shield className="h-8 w-8 text-secondary mb-2" />
                      <p className="text-sm font-semibold">Secure Loading</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <CheckCircle2 className="h-8 w-8 text-secondary mb-2" />
                      <p className="text-sm font-semibold">Damage-Free</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why VNR Logistics?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We don't just move cargo — we move businesses forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Nationwide Coverage",
                description: "Durban, Johannesburg, Cape Town",
              },
              {
                icon: Clock,
                title: "Reliable Delivery Schedules",
                description: "On-time performance you can count on",
              },
              {
                icon: Users,
                title: "Industry-Focused Logistics",
                description: "Tailored solutions for your sector",
              },
              {
                icon: Car,
                title: "Specialized Vehicle Transport",
                description: "Dedicated car carrier division",
              },
              {
                icon: Shield,
                title: "Safety & Compliance Focused",
                description: "Certified and insured operations",
              },
              {
                icon: CheckCircle2,
                title: "Professional Support",
                description: "Responsive and reliable service",
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
                  <h3 className="font-semibold text-primary mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Strategic National Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We operate across South Africa's key economic hubs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                city: "Durban",
                description: "Port logistics & coastal distribution",
              },
              {
                city: "Johannesburg",
                description: "Inland freight & industrial movement",
              },
              {
                city: "Cape Town",
                description: "Coastal and regional transport",
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MapPin className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
                <p className="text-gray-200">{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Reliable Logistics Partner?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Let VNR Logistics handle your transport requirements with
              professionalism and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto"
                >
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary"
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
