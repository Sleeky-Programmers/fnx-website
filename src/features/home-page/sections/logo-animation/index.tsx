"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LogoAnimationSection() {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center bg-white overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto">
        
        {/* Small Logo (appears first, fades out) */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{
            delay: 0.9, // Wait 1.5s before starting fade out
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <div className="relative w-48 h-48">
            <Image
              src="/FNX-logo.png"
              alt="FNX Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Large Diagram (appears after) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.2, // Start a bit before logo fully fades
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-full aspect-square max-w-4xl mx-auto"
        >
          <Image
            src="/hero-bg/FNX-values.png"
            alt="FNX Values Diagram"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
