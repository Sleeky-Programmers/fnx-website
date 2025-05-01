"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WhoWeAreSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
<section className="py-24 bg-white" ref={sectionRef}>
  <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 bg-gray-200/50 w-full h-60%"
      >
        <div className="inline-block px-8 py-4 mt-10">
          <h2 className="text-4xl font-bold text-[#003241] mb-2">
            Who we are
          </h2>
          <div className="h-1 w-16 bg-[#9F836D]" />
        </div>

        <h3 className="text-2xl font-semibold text-[#003241] px-8">
          We are an Independently run <br />Management Company
        </h3>

        <p className="text-[#003241] leading-relaxed px-8 pb-6">
          We appreciate that launching and running a fund is an expensive, constantly evolving and time-consuming experience.
        </p>
      </motion.div>

      {/* Image Block */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative h-[400px] lg:h-[500px] w-full overflow-hidden lg:mr-12 px-4"

      >
        <Image
          src="/home-about-us-image.png"
          alt="Team working together"
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>

  );
}
