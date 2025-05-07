"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

interface TabContentProps {
  direction: number;
}

const subTabs = [
  {
    value: "icav-multiple",
    label: "ICAV with Multiple Sub-Fund",
     shortLabel: "ICAV Funds",
    description:
      "Many funds can struggle initially or later in life because they have not chosen the most appropriate structure or terms. One size does not fit all.",
    image: "/fund-structure-multiple.png",
  },
  {
    value: "fund-providers",
    label: "Fund Service Providers",
     shortLabel: "Providers",
    description:
      "Not every structure suits every asset class, strategy or investor base. Let us work with you and our services providers to suggest the best solution for you and your future plans.",
    image: "/fund-structure-providers.png",
  },
  {
    value: "typical-structure",
    label: "Typical Fund Structure",
    shortLabel: "Structure",
    description:
      "Not every structure suits every asset class, strategy or investor base. Let us work with you and our services providers to suggest the best solution for you and your future plans.",
    image: "/fund-structure-typical.png",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function TypicalFundStructureContent({ direction }: TabContentProps) {
  const [selectedSubTab, setSelectedSubTab] = useState("icav-multiple");
  const [subDirection, setSubDirection] = useState(0);

  const handleSubTabChange = (value: string) => {
    const tabOrder = ["icav-multiple", "fund-providers", "typical-structure"];
    const oldIndex = tabOrder.indexOf(selectedSubTab);
    const newIndex = tabOrder.indexOf(value);
    setSubDirection(newIndex > oldIndex ? 1 : -1);
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
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
      className="w-full min-h-[calc(100vh-6rem)] px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-5 ">
          <h2 className="text-xl sm:text-2xl font-semibold mt-5">
            Typical Fund Structure
          </h2>
          <div className="h-1 w-20 sm:w-28 md:w-32 bg-[#9F836D] mx-auto" />
        </div>

        <Tabs
          value={selectedSubTab}
          onValueChange={handleSubTabChange}
          className="w-full space-y-8"
        >
          <div className="sticky top-0 bg-white/80 backdrop-blur-sm py-4 z-20">
            <TabsList className="w-full flex flex-row justify-center gap-3 border-b pb-4">
            {subTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
            className="px-3 py-2.5 text-xs sm:text-sm lg:text-base text-[#9f836d] 
              rounded-xl transition-all duration-200 hover:bg-[#9F836D]/10
              data-[state=active]:bg-[#9F836D] data-[state=active]:text-white
              text-center min-h-[2.5rem] sm:min-h-[3rem] max-w-[120px] sm:max-w-none truncate whitespace-nowrap overflow-hidden text-ellipsis"
              >
            <span className="block sm:hidden">{tab.shortLabel}</span>
            <span className="hidden sm:block">{tab.label}</span>
              </TabsTrigger>
          
            ))}
          </TabsList>
          </div>

          <div className="relative min-h-[500px] sm:min-h-[600px]">
            <AnimatePresence mode="wait" custom={subDirection}>
              {subTabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="absolute w-full"
                >
                  <motion.div
                    custom={subDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                    className="space-y-8"
                  >
                    <p className="text-gray-600 text-md sm:text-lg max-w-3xl mx-auto text-center px-4">
                    {tab.description}
                  </p>


                    <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={tab.image}
                        alt={tab.label}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        className="object-contain bg-white"
                        priority
                      />
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}