"use client";

import { privacyPolicyContent } from "@/data/legal/privacy-policy";
import { easeOut, motion, useInView } from "framer-motion";
import { useRef } from "react";

function PrivacySection({ title, body, delay }: { title: string; body: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", once: false });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: easeOut, delay }}
        className="p-4 rounded-xl shadow-sm bg-gray-100/60 text-[#003241] mx-5"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="whitespace-pre-line text-md text-gray-700">{body}</p>
      </motion.div>
    </div>
  );
}

export default function PrivacyPage() {
  const sectionRef = useRef(null);

  return (
    <section
      className="max-w-4xl mx-auto px-4 py-16 space-y-10 mt-10 text-justify"
      ref={sectionRef}
    >
      <h1 className="text-3xl font-bold text-[#003241] mx-5">Privacy Policy</h1>

      {privacyPolicyContent.map((section, index) => (
        <PrivacySection
          key={index}
          title={section.title}
          body={section.body}
          delay={index * 0.1}
        />
      ))}
    </section>
  );
}
