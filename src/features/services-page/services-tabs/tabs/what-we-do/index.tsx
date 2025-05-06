"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TabContentProps {
  direction: number;
}

export function WhatWeDoContent({ direction }: TabContentProps) {
  return (
    <motion.div
    key="what-we-do"
    custom={direction}
    variants={{
      enter: (dir: number) => ({
        x: dir > 0 ? 100 : -100,
        opacity: 0,
      }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({
        x: dir < 0 ? 100 : -100,
        opacity: 0,
      }),
    }}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.3, bounce: 0.2, type: "spring" }}
    className="flex justify-center px-4 sm:px-6 md:px-8"
  >
    <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 mt-10 md:mt-5">
      <h2 className="text-xl sm:text-2xl font-semibold">
        Management Company Offering
      </h2>
      <div className="h-1 w-24 sm:w-32 bg-[#9F836D]" />
      <p className="text-gray-600 text-sm sm:text-base max-w-3xl px-2 sm:px-0">
        We partner with institutional investors, investment funds and asset
        managers, representing clients globally.
      </p>
  
      <div className="relative w-full max-w-md sm:max-w-2xl aspect-[4/3] sm:aspect-square">
        <Image
          src="/infogram/fnx-services.png"
          alt="Management Company Offering"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  </motion.div>
  
  );
}
