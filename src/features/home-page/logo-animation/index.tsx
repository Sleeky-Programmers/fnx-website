"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function LogoAnimationSection() {
  const logoRef = useRef(null);
  const diagramRef = useRef(null);
  const isLogoInView = useInView(logoRef, { margin: "-100px" });
  const isDiagramInView = useInView(diagramRef, { margin: "-100px" });

  return (
    <section className="relative min-h-[90vh] md:min-h-[100vh] flex items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={logoRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: isLogoInView ? 0 : 1 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="relative w-48 h-48">
            <Image
              src="/West53-logo.jpeg"
              alt="West53 Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          ref={diagramRef}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isDiagramInView ? 1 : 0.8, opacity: isDiagramInView ? 1 : 0 }}
          transition={{
            delay: 0.9,
            duration: 1.2,
            ease: "easeOut",
          }}
          className="relative w-full aspect-square max-w-4xl mx-auto"
        >
          <Image
            src="/infogram/West53-values.png"
            alt="West53 Values Diagram"
            className="object-contain"
            fill
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
