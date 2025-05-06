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
        className="space-y-6 bg-gray-200/50 w-full h-50% "
      >
        <div className="inline-block py-4 mt-10 mx-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#003241] mb-2">
                Who we are
              </h2>
              <div className="h-1 w-16 bg-[#9F836D] mt-2" />
        </div>
        <div className="inline-block py-4 mx-20">
        
        <h3 className="text-xl lg:text-2xl font-semibold text-[#003241] mt-5 mb-2">
              We are an Independently run <br className="hidden sm:block" />
              Management Company
            </h3>

        <p className="text-base lg:text-lg text-[#003241] leading-relaxed">
              We appreciate that launching and running a fund <br className="hidden sm:block" />
              is an expensive, constantly evolving and time- <br className="hidden sm:block" />
              consuming experience.
            </p>
            </div>
      </motion.div>

      {/* Image Block */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden px-4 mr-6 lg:mr-20"


      >
        <Image
          src="/home-about-us-image.png"
          alt="Team working together"
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 700px) 90vw, 50vw"
          priority
        />
      </motion.div>
    </div>
  </div>
</section>

  );
}
