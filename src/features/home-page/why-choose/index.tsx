"use client";

import { PiHandshakeLight } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiMedal } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconType } from "react-icons"; 

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


interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", once: false });
  const fromX = index % 2 === 0 ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: fromX }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: fromX }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col items-start"
    >
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#9f836d]/20 text-[#9F836D]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-[#003241] mb-2">{title}</h3>
      <p className="text-sm text-[#003241] leading-relaxed">{description}</p>
    </motion.div>
  );
}


export function WhyChooseSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { margin: "-100px", once: false });

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:text-3xl font-bold text-[#003241] mb-2"
          >
            Why choose West53?
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 w-16 bg-[#9F836D] mx-auto origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg lg:text-2xl font-medium text-[#003241] mt-4"
          >
            Decades of expertise backed by trust and innovation
          </motion.p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
