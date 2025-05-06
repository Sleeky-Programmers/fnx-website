"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { WhatWeDoContent } from "./tabs/what-we-do";
import { FundServiceProvidersContent } from "./tabs/fund-service-providers";
import { TypicalFundStructureContent } from "./tabs/typical-fund-structure";

export function ServicesTabs() {
  const [selectedTab, setSelectedTab] = useState("what-we-do");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (value: string) => {
    const tabOrder = ["what-we-do", "fund-service-providers", "typical-fund-structure"];
    const oldIndex = tabOrder.indexOf(selectedTab);
    const newIndex = tabOrder.indexOf(value);
    setDirection(newIndex > oldIndex ? 1 : -1);
    setSelectedTab(value);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="space-y-8 ">
          {/* Only Center the TabsList */}
          <TabsList className="w-full flex flex-row md:flex-nowrap justify-center gap-2 mb-8 border-b">

  <TabsTrigger 
    value="what-we-do"
    className="text-sm md:text-lg h-10 mb-5 text-[#9f836d] px-4 py-2 md:px-8 md:py-4 data-[state=active]:bg-[#9F836D] data-[state=active]:text-white font-bold rounded-xl transition-colors"
  >
    <span className="md:inline hidden">What We Do</span>
    <span className="inline md:hidden">Overview</span>
  </TabsTrigger>

  <TabsTrigger 
    value="fund-service-providers"
    className="text-sm md:text-lg h-10 mb-5 text-[#9f836d] px-4 py-2 md:px-8 md:py-4 data-[state=active]:bg-[#9F836D] data-[state=active]:text-white font-bold rounded-xl transition-colors"
  >
    <span className="md:inline hidden">Fund Service Providers</span>
    <span className="inline md:hidden">Providers</span>
  </TabsTrigger>

  <TabsTrigger 
    value="typical-fund-structure"
    className="text-sm md:text-lg h-10 mb-5 text-[#9f836d] px-4 py-2 md:px-8 md:py-4 data-[state=active]:bg-[#9F836D] data-[state=active]:text-white font-bold rounded-xl transition-colors"
  >
    <span className="md:inline hidden">Typical Fund Structure</span>
    <span className="inline md:hidden">Structure</span>
  </TabsTrigger>

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
