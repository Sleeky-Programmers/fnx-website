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
    description: "Many funds can struggle initially or later in life because they have not chosen the most appropriate structure or terms. One size does not fit all.",
    image: "/fund-structure-multiple.png"
  },
  {
    value: "fund-providers",
    label: "Fund Service Providers",
    description: "Not every structure suits every asset class, strategy or investor base. Let us work with you and our services providers to suggest the best solution for you and your future plans.",
    image: "/fund-structure-providers.png"
  },
  {
    value: "typical-structure",
    label: "Typical Fund Structure",
    description: "Not every structure suits every asset class, strategy or investor base. Let us work with you and our services providers to suggest the best solution for you and your future plans.",
    image: "/fund-structure-typical.png"
  }
];

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
      variants={{
        enter: (direction: number) => ({
          x: direction > 0 ? 100 : -100,
          opacity: 0
        }),
        center: {
          x: 0,
          opacity: 1
        },
        exit: (direction: number) => ({
          x: direction < 0 ? 100 : -100,
          opacity: 0
        })
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, bounce: 0.2, type: "spring" }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-2xl font-semibold mb-3">Typical Fund Structure</h2>
        <div className="h-1 w-32 bg-[#9F836D] mb-6" />
        <Tabs value={selectedSubTab} onValueChange={handleSubTabChange} className="space-y-8">
          <TabsList className="w-full justify-start border-b mb-8">
            {subTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-lg mb-8 text-[#9f836d] px-8 py-4 data-[state=active]:bg-[#9F836D] h-12 data-[state=active]:text-white transition-colors font-bold rounded-xl"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait" custom={subDirection}>
            {subTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-8">
                <motion.div
                  custom={subDirection}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? 100 : -100,
                      opacity: 0
                    }),
                    center: {
                      x: 0,
                      opacity: 1
                    },
                    exit: (direction: number) => ({
                      x: direction < 0 ? 100 : -100,
                      opacity: 0
                    })
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, bounce: 0.2, type: "spring" }}
                >
                  <div className="space-y-8">
                    <p className="text-gray-600 text-center max-w-3xl mx-auto">
                      {tab.description}
                    </p>
                    <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-lg overflow-hidden">
                      <Image
                        src={tab.image}
                        alt={tab.label}
                        fill
                        className="object-contain bg-white"
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
        </div>
      </div>
    </motion.div>
  );
}