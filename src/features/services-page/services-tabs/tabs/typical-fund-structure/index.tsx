"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import TabHeader from "@/components/service/tab-header";

interface TabContentProps {
  direction: number;
}

const subTabs = [
  {
    value: "icav-multiple",
    label: "Platform with Multiple Sub-Funds",
    shortLabel: "Platform with Multiple Sub-Funds",
    description:
      "Many funds can struggle initially or later in life because they have not chosen the most appropriate structure or terms. One size does not fit all.",
    image: "/fund-structure-multiple.png",
  },
  {
    value: "icav-single",
    label: "ICAV with Single Fund",
    shortLabel: "ICAV with Single Fund",
    description:
      "Not every structure suits every asset class, strategy or investor base. Let us work with you and our services providers to suggest the best solution for you and your future plans.",
    image: "/fund-structure-providers.png",
  },
  {
    value: "ilp-multiple",
    label: "ILP (with Multiple Sub-Funds)",
    shortLabel: "ILP (with Multiple Sub-Funds)",
    description:
      "Not every structure suits every asset class, strategy or investor base. Let us work with you and our services providers to suggest the best solution for you and your future plans.",
    image: "/fund-structure-typical.png",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 100 : -100, opacity: 0 }),
};

export function TypicalFundStructureContent({ direction }: TabContentProps) {
  const [selectedSubTab, setSelectedSubTab] = useState(subTabs[0].value);
  const [subDirection, setSubDirection] = useState(0);

  const handleSubTabChange = (value: string) => {
    const order = subTabs.map((t) => t.value);
    const oldIdx = order.indexOf(selectedSubTab);
    const newIdx = order.indexOf(value);
    setSubDirection(newIdx > oldIdx ? 1 : -1);
    setSelectedSubTab(value);
  };

  return (
    <motion.div
      key="typical-fund-structure"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.1, type: "spring", bounce: 0 }}
      className="flex justify-center w-full overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center px-4">
        <TabHeader title="Typical Fund Structure" />

        <Tabs
          value={selectedSubTab}
          onValueChange={handleSubTabChange}
          className="w-full space-y-6 mt-6"
        >
          {/* Tab Triggers */}
          <div className="sticky top-0 bg-white/90 backdrop-blur-sm py-4 z-20 -mx-4 px-4">
            <TabsList className="w-full flex justify-center gap-1 sm:gap-3 flex-wrap sm:flex-nowrap">
              {subTabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-2 sm:px-3 py-3 sm:py-2.5 text-[10px] sm:text-sm lg:text-base text-[#9f836d]
                    rounded-xl sm:rounded-xl transition-all duration-200 hover:bg-[#9F836D]/10
                    data-[state=active]:bg-[#9F836D] data-[state=active]:text-white
                    text-center min-h-[3rem] sm:min-h-[2.5rem] flex-1 sm:flex-none
                    leading-[1.1] break-words whitespace-normal
                    flex items-center justify-center"
                >
                  <span className="text-center leading-[1.1] px-1">{tab.shortLabel}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Content Panes */}
          <div className="relative min-h-[400px] sm:min-h-[500px]">
            {subTabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="absolute w-full top-0"
              >
                <AnimatePresence mode="wait" custom={subDirection}>
                  {selectedSubTab === tab.value && (
                    <motion.div
                      custom={subDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.1, type: "spring", bounce: 0 }}
                      className="space-y-6 sm:space-y-8"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-center leading-relaxed"
                      >
                        {tab.description}
                      </motion.p>

                      <div className="h-1 bg-[#9F836D] w-full max-w-4xl mx-auto rounded-full" />

                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative w-full max-w-5xl rounded-xl overflow-hidden flex justify-center items-center mx-auto shadow-lg bg-white p-4"
                        style={{
                          minHeight: "400px",
                        }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={tab.image}
                            alt={tab.label}
                            width={1000}
                            height={700}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1000px"
                            className="object-contain w-full h-auto max-h-[500px]"
                            priority
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}