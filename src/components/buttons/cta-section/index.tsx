"use client";

import { easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ContactUsButton } from "../contact-us-btn";

export function GetStartedSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full flex md:flex-row flex-col items-center justify-center gap-5 bg-[#9F836D] text-white py-8 px-4"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5"
      >
        <p className="font-bold text-lg md:text-2xl text-center md:text-left">
          Ready to get started?
        </p>
        <ContactUsButton />
      </motion.div>
    </section>
  );
}
