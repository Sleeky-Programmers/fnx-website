"use client";

import { easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WhoWeAreSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", once: false });

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <div className="bg-gray-100/60 rounded-2xl p-8 sm:p-12 space-y-6 shadow-sm">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-[#003241] mb-2">
              Who we are
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
              className="h-1 w-16 bg-[#9F836D] mt-2 origin-left"
            />
          </motion.div>

          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="text-xl lg:text-2xl font-semibold text-[#003241]"
          >
            We are an Independently run Management Company
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.3 }}
            className="text-base lg:text-lg leading-relaxed text-justify text-[#003241]"
          >
            We appreciate that launching and running a fund is an expensive,
            constantly evolving, and time-consuming experience. Our mission is
            to ease that burden by offering thoughtful, reliable, and
            experienced support across every step of the process.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
