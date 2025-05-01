"use client";

import { ValueCard } from "@/components/ui/value-card";
import { motion } from "framer-motion";
import Image from "next/image";

const values: { title: string; description: string; variant: "light" | "dark" }[] = [
  {
    title: "SIMPLICITY",
    description: "We prioritize straightforward, actionable solutions. We're mindful of the time and financial implications of our advice, keeping things direct and efficient.",
    variant: "light"
  },
  {
    title: "INTEGRITY",
    description: "Our unwavering commitment to integrity means we're responsible and accountable to regulators, clients and ourselves. Transparency and honesty define our approach.",
    variant: "dark"
  },
  {
    title: "EFFICIENCY",
    description: "We're fanatical about efficiency, keeping costs low and operations effective. We optimize our services to empower clients in achieving their financial goals.",
    variant: "dark"
  },
  {
    title: "RESPECT",
    description: "We deeply respect the time, effort, and commitment of our stakeholders, particularly our clients. We honor their dedication with unwavering support and integrity.",
    variant: "light"
  }
];

export function ValuesCards() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading and Paragraph */}
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 items-center"
        >
             <div className="flex flex-col items-center text-center mb-10"> 
          <h2 className="text-3xl md:text-2xl font-bold mb-2">Our Values</h2>
          <div className="h-1 w-32 bg-[#9F836D] items-center mb-4" />
          <p className="text-md font-semibold text-gray-600">Guided by Simplicity, Powered by Integrity</p>

        </div>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {/* FNX Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full flex items-center justify-center z-10"
          >
            <div className="relative w-32 h-32">
              <Image
                src="/FNX-logo.png"
                alt="FNX Logo"
                fill
                className="object-contain items-center justify-center"
              />
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="text-xs p-4 text-center grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
             <motion.div
             key={value.title}
             initial={{ 
               x: index < 2 ? 100 : -100, 
               opacity: 0 
             }}
             whileInView={{ 
               x: 0, 
               opacity: 1 
             }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{
               duration: 0.8,
               ease: "easeOut",
               delay: index < 2 ? 0.3 : 0.6
             }}
             className="aspect-square w-80 h-80 md:w-80 md:h-80 rounded-2xl overflow-hidden flex"
           >
             <ValueCard
               title={value.title}
               description={value.description}
               variant={value.variant}
             />
           </motion.div>
           
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
