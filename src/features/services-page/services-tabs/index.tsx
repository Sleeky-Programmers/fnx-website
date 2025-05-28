"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { WhatWeDoContent } from "./tabs/what-we-do";
import { FundServiceProvidersContent } from "./tabs/fund-service-providers";
import { TypicalFundStructureContent } from "./tabs/typical-fund-structure";

const tabOrder = ["what-we-do", "fund-service-providers", "typical-fund-structure"];

export function ServicesTabs() {
  const [selectedTab, setSelectedTab] = useState("what-we-do");
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (value: string) => {
    const oldIndex = tabOrder.indexOf(selectedTab);
    const newIndex = tabOrder.indexOf(value);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setSelectedTab(value);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollTime = 0;
    const debounceDelay = 600; 

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < 40) return; 
      const now = Date.now();
      if (now - lastScrollTime < debounceDelay) return;
      lastScrollTime = now;

      e.preventDefault();

      const currentIndex = tabOrder.indexOf(selectedTab);
      let nextIndex = currentIndex + (e.deltaX > 0 ? 1 : -1);

      if (nextIndex < 0) nextIndex = tabOrder.length - 1;
      if (nextIndex >= tabOrder.length) nextIndex = 0;

      handleTabChange(tabOrder[nextIndex]);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [selectedTab]);

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="space-y-8">
          <TabsList className="w-full flex flex-row md:flex-nowrap justify-center gap-2 mb-8 border-b">
            {tabOrder.map((value) => {
              const label =
                value === "what-we-do"
                  ? { full: "What We Do", short: "Overview" }
                  : value === "fund-service-providers"
                  ? { full: "Fund Service Providers", short: "Providers" }
                  : { full: "Typical Fund Structure", short: "Structure" };

              return (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="text-sm md:text-lg h-10 mb-5 text-[#9f836d] px-4 py-2 md:px-8 md:py-4 data-[state=active]:bg-[#9F836D] data-[state=active]:text-white font-bold rounded-xl transition-colors"
                >
                  <span className="md:inline hidden">{label.full}</span>
                  <span className="inline md:hidden">{label.short}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <AnimatePresence mode="wait" custom={direction}>
            <TabsContent value="what-we-do" className="mt-8">
              <WhatWeDoContent direction={direction} />
            </TabsContent>
            <TabsContent value="fund-service-providers" className="mt-8">
              <FundServiceProvidersContent direction={direction} />
            </TabsContent>
            <TabsContent value="typical-fund-structure" className="mt-8">
              <TypicalFundStructureContent direction={direction} />
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
