"use client";

import { motion } from "framer-motion";
import { ContactUsButton } from "../contact-us-btn";

export function GetStartedSection() {
  return (
    <section className="w-full flex md:flex-row flex-col items-center justify-center gap-7 md:gap-5 bg-[#9F836D] text-white py-10 overflow-hidden">
      
      {/* Animate the text and button */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-7 md:gap-5"
      >
        <p className="font-bold text-2xl">Ready to get started?</p>
        <ContactUsButton />
      </motion.div>

    </section>
  );
}
