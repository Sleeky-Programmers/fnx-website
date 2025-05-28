"use client";

import Image from 'next/image';
import { motion } from "framer-motion";

const overlayVariant = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

const contentVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

export function TeamsHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        variants={overlayVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto px-4 relative z-20 text-center"
      >
        <motion.h1
          variants={contentVariant}
          className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-2"
        >
          Our Team
        </motion.h1>
        <motion.p
          variants={contentVariant}
          className="text-md text-white/90"
        >
          Our people make our company. <br />
          They can make yours too.
        </motion.p>
      </motion.div>
    </section>
  );
}
