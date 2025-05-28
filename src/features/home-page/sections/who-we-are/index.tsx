"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WhoWeAreSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-100/60 rounded-2xl p-8 sm:p-12 space-y-6 shadow-sm"
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#003241] mb-2">
              Who we are
            </h2>
            <div className="h-1 w-16 bg-[#9F836D] mt-2" />
          </div>

          <div className="space-y-4 text-[#003241]">
            <h3 className="text-xl lg:text-2xl font-semibold">
              We are an Independently run Management Company
            </h3>
            <p className="text-base lg:text-lg leading-relaxed text-justify">
              We appreciate that launching and running a fund is an expensive,
              constantly evolving, and time-consuming experience. Our mission is
              to ease that burden by offering thoughtful, reliable, and
              experienced support across every step of the process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
