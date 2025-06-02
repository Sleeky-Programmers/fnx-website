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
     
      className="flex justify-center"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        
         <TabHeader 
              title="Management Company Offering"
              description="  We partner with institutional investors, investment funds and asset
          managers, representing clients globally."
            />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full max-w-5xl aspect-square flex justify-center items-center min-h-[90vh] md:min-h-[100vh]"
        >
          <div className="w-[95%] h-[95%] relative">
            <Image
              src="/infogram/West53-service.png"
              alt="Management Company Offering"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
