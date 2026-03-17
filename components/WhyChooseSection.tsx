"use client";

import { motion } from "framer-motion";

export default function WhyChooseSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0B1F3A] via-[#0d2847] to-[#0B1F3A] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-[#E53935]/10 border border-[#E53935]/30 rounded-full text-[#E53935] text-sm font-semibold">
              Why Choose VNR Logistics?
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We combine industry expertise with a customer-first approach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team is committed to providing professional, reliable service across all major South African routes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              stat: "Since 2018",
              label: "Serving South Africa",
              color: "from-[#E53935] to-[#C62828]",
            },
            {
              stat: "3",
              label: "Major Cities Served",
              color: "from-[#E53935] to-[#C62828]",
            },
            {
              stat: "100%",
              label: "Customer Satisfaction Focus",
              color: "from-[#E53935] to-[#C62828]",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>
                  {item.stat}
                </div>
                <div className="text-gray-300 font-medium text-lg">
                  {item.label}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
