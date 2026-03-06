"use client";

import Link from "next/link";
import Image from "next/image";
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
  Check,
} from "lucide-react";
import CompanyProfile from "@/components/CompanyProfile";

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
    <div className="pt-16 lg:pt-20">
      {/* Hero Section - Premium Split Layout */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                South Africa's Trusted Car & Cargo Transport Specialists
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Premium road freight and specialized car carrier transport
                connecting Durban, Johannesburg, and Cape Town — safely,
                securely, and on schedule.
              </motion.p>

              {/* Bullet Points */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {[
                  "Dedicated Car Carrier Fleet",
                  "Container & Break Bulk Experts",
                  "Nationwide Major Routes",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-secondary rounded-full p-1">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
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
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 h-auto w-full sm:w-auto border-2 border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                  >
                    View Car Carrier Division
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Image with Floating Cards */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/car-carrier-dealership.jpg"
                  alt="VNR Logistics Car Carrier"
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div
                className="absolute top-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-sm text-gray-600">Major Cities Covered</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div
                className="absolute bottom-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Car className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Specialized</p>
                    <p className="text-lg font-bold text-primary">Vehicle Transport</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-50"></div>
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl active:shadow-xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98, y: -8 }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-active:bg-primary/20 transition-colors">
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

      <CompanyProfile />

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
                  vehicle transportation services across South Africa with convenient
                  door-to-door delivery. We prioritize secure loading systems and 
                  damage-free transport for every vehicle in our care.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Door-to-door service",
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
                <motion.div
                  className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-[url('/images/car-carrier-dealership.jpg')] bg-cover bg-center opacity-15 md:opacity-10 md:group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <Car className="h-16 w-16 text-secondary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">
                      Professional Vehicle Transport
                    </h3>
                    <p className="text-gray-200 mb-6">
                      Trusted by dealerships, fleet operators, and industrial clients
                      for secure, damage-free vehicle transportation.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="bg-white/15 md:bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 active:bg-white/25 transition-colors cursor-pointer"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Shield className="h-8 w-8 text-secondary mb-2" />
                        <p className="text-sm font-semibold">Secure Loading</p>
                      </motion.div>
                      <motion.div
                        className="bg-white/15 md:bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 active:bg-white/25 transition-colors cursor-pointer"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 className="h-8 w-8 text-secondary mb-2" />
                        <p className="text-sm font-semibold">Damage-Free</p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
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
    </div>
  );
}
