"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { GetStarted } from '@/components/buttons/get-started-btn';

export function HeroSection() {
  return (
    <section className="w-full h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image Animation */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute w-full h-[100dvh] z-10 top-0 left-0 "
      >
        <Image
          src='/bg-images/home.jpg'
          alt=" "
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content Animation */}
      <div className="z-20 flex flex-col gap-6 items-center justify-center text-white">
        {/* Paragraph Animation */}
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="font-bold text-center text-2xl md:text-2xl lg:text-3xl text-[#D5D5D5]" 
        >
          AIFMD and Management Company Services
        </motion.p>

        {/* Button Animation */}
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <GetStarted />
        </motion.div>
      </div>
    </section>
  );
}
