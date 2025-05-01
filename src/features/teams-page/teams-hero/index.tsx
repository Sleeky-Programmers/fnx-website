"use client";

import Image from 'next/image';
import { motion } from "framer-motion";

export function TeamsHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg-images/teams.png"
          alt="Team background"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-2">
            Our Team
          </h1>
          <p className="text-md text-white/90">
            Our people make our company. <br />
            They can make yours too.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
