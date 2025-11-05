"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TabHeader from "@/components/service/tab-header";
import { getWhatWeDo } from "@/lib/api";

interface TabContentProps {
  direction: number;
}

export function WhatWeDoContent({ direction }: TabContentProps) {
  const [content, setContent] = useState<{
    title: string;
    description: string;
    image?: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getWhatWeDo();
        setContent(data);
      } catch (err) {
        console.error("Error fetching What We Do content:", err);
      }
    })();
  }, []);

  if (!content) {
    return (
      <div className="flex justify-center items-center py-20 text-gray-400">
        Loading What We Do...
      </div>
    );
  }

  return (
    <motion.div
      key="what-we-do"
      custom={direction}
      className="flex justify-center w-full"
    >
      <div className="short-content w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-2 sm:space-y-4 px-4 sm:px-6">
        <TabHeader title={content.title} description={content.description} />

        {content.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full max-w-4xl mx-auto"
          >
            {/* Mobile */}
            <div className="block sm:hidden relative w-full aspect-[3/4]">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 100vw"
              />
            </div>

            {/* Tablet */}
            <div className="hidden sm:block md:hidden relative w-full aspect-[4/5]">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-contain"
                priority
                sizes="(min-width: 640px) and (max-width: 768px) 100vw"
              />
            </div>

            {/* Desktop */}
            <div className="hidden md:block relative w-full aspect-[5/4]">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-contain"
                priority
                sizes="(min-width: 768px) 100vw"
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
