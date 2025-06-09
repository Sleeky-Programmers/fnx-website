"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TabHeader from "@/components/service/tab-header";

interface TabContentProps {
  direction: number;
}

export function WhatWeDoContent({ direction }: TabContentProps) {
  return (
    <motion.div
      key="what-we-do"
      custom={direction}
      className="flex justify-center w-full"
    >
      {/* Apply the short-content class for proper spacing */}
      <div className="short-content w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-2 sm:space-y-4 px-4 sm:px-6">
        <TabHeader
          title="Management Company Offering"
          description="We partner with institutional investors, investment funds and asset managers, representing clients globally."
        />
                 
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Mobile: Taller aspect ratio */}
          <div className="block sm:hidden relative w-full aspect-[3/4]">
            <Image
              src="/infogram/West53-service.png"
              alt="Management Company Offering"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw"
            />
          </div>
                     
          {/* Tablet: Portrait aspect ratio */}
          <div className="hidden sm:block md:hidden relative w-full aspect-[4/5]">
            <Image
              src="/infogram/West53-service.png"
              alt="Management Company Offering"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 640px) and (max-width: 768px) 100vw"
            />
          </div>
                     
          {/* Desktop: Landscape aspect ratio */}
          <div className="hidden md:block relative w-full aspect-[5/4]">
            <Image
              src="/infogram/West53-service.png"
              alt="Management Company Offering"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 768px) 100vw"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}