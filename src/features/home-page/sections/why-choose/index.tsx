"use client";

import { PiHandshakeLight } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiMedal } from "react-icons/ci";
import { motion } from "framer-motion";

const features = [
  {
    icon: CiMedal,
    title: "A Legacy of Excellence",
    description:
      "Over the last 30 years, our team has partnered with hundreds of investment managers. Their insights shaped the foundation of our firm.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Comprehensive Insight",
    description:
      "We’ve worked across both buy and sell sides, offering us a unique understanding of our clients’ evolving needs.",
  },
  {
    icon: PiHandshakeLight,
    title: "Strong Relationships",
    description:
      "Our client partnerships are built on mutual respect, transparency, and long-term trust.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003241] mb-2">
            Why choose West53?
          </h2>
          <div className="h-1 w-16 bg-[#9F836D] mx-auto" />
          <p className="text-lg lg:text-2xl font-medium text-[#003241] mt-4">
            Decades of expertise backed by trust and innovation
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col items-start"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#9f836d]/20 text-[#9F836D]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#003241] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#003241] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
