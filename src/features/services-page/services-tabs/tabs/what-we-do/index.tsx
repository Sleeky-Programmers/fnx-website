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
      className="flex justify-center"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="text-2xl font-semibold">Management Company Offering</h2>
        <div className="h-1 w-32 bg-[#9F836D]" />
        <p className="text-gray-600 max-w-3xl">
          We partner with institutional investors, investment funds and asset
          managers, representing clients globally.
        </p>

        <div className="relative w-full max-w-5xl aspect-square flex justify-center items-center">
          <div className="w-[95%] h-[95%] relative">
            <Image
              src="/infogram/West53-services.png"
              alt="Management Company Offering"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
