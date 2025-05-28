"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import { WhatWeDoContent } from "./tabs/what-we-do";
import { FundServiceProvidersContent } from "./tabs/fund-service-providers";
import { TypicalFundStructureContent } from "./tabs/typical-fund-structure";

const TAB_ORDER = ["what-we-do", "fund-service-providers", "typical-fund-structure"];

export function ServicesTabs() {
  const [selectedTab, setSelectedTab] = useState("what-we-do");
  const [direction, setDirection] = useState(0);

  const currentIndex = useMemo(() => TAB_ORDER.indexOf(selectedTab), [selectedTab]);

  const handleTabChange = (value: string) => {
    const newIndex = TAB_ORDER.indexOf(value);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelectedTab(value);
  };

 const swipeHandlers = useSwipeable({
  onSwipedLeft: () => {
    if (currentIndex < TAB_ORDER.length - 1) {
      const next = TAB_ORDER[currentIndex + 1];
      handleTabChange(next);
    }
  },
  onSwipedRight: () => {
    if (currentIndex > 0) {
      const prev = TAB_ORDER[currentIndex - 1];
      handleTabChange(prev);
    }
  },
  delta: 10,          
  trackTouch: true,
  trackMouse: true    
});


  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="space-y-8">
          {/* Tab Triggers */}
          <TabsList className="w-full flex flex-row md:flex-nowrap justify-center gap-2 mb-8 border-b">
            {TAB_ORDER.map((tabKey) => (
              <TabsTrigger
                key={tabKey}
                value={tabKey}
                className="text-sm md:text-lg h-10 mb-5 text-[#9f836d] px-4 py-2 md:px-8 md:py-4 data-[state=active]:bg-[#9F836D] data-[state=active]:text-white font-bold rounded-xl transition-colors"
              >
                <span className="md:inline hidden">
                  {{
                    "what-we-do": "What We Do",
                    "fund-service-providers": "Fund Service Providers",
                    "typical-fund-structure": "Typical Fund Structure"
                  }[tabKey]}
                </span>
                <span className="inline md:hidden">
                  {{
                    "what-we-do": "Overview",
                    "fund-service-providers": "Providers",
                    "typical-fund-structure": "Structure"
                  }[tabKey]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

        <div {...swipeHandlers} className="w-full overflow-hidden">
  <AnimatePresence mode="wait" custom={direction}>
    <div className="overflow-hidden">
      {selectedTab === "what-we-do" && (
        <TabsContent value="what-we-do" className="mt-8">
          <WhatWeDoContent direction={direction} />
        </TabsContent>
      )}
      {selectedTab === "fund-service-providers" && (
        <TabsContent value="fund-service-providers" className="mt-8">
          <FundServiceProvidersContent direction={direction} />
        </TabsContent>
      )}
      {selectedTab === "typical-fund-structure" && (
        <TabsContent value="typical-fund-structure" className="mt-8">
          <TypicalFundStructureContent direction={direction} />
        </TabsContent>
      )}
    </div>
  </AnimatePresence>
</div>

        </Tabs>
      </div>
    </section>
  );
}
