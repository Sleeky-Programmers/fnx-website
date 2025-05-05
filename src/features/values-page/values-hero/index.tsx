"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ValuesHero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
        <Image
                  src="/bg-images/values.jpg"
                  alt="values background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
        <div className="absolute inset-0 bg-black/50" />
      
  
  <div className="absolute inset-0 bg-black/60 z-10" />
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
            How We Work
          </h1>
          <p className="text-xl text-white/90">
            In an industry paralysed by complexity and cost, our values are simple but they are crucial and core to our undertaking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}