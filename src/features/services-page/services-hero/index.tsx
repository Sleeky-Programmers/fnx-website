"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
     
         <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute w-full h-[100dvh] z-10 top-0 left-0"
              >
                <Image
                  src='/bg-images/services.png'
                  alt=" "
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
        <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
            Our AIFMD Services
          </h1>
          <p className="text-xl text-white/90">
            Expect more from your Management Company
          </p>
        </motion.div>
      </div>
    </section>
  );
}