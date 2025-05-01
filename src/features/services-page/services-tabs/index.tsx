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
          <TabsList className="w-full flex justify-center mb-8 border-b ">
           
            <TabsTrigger 
              value="what-we-do"
              className="text-lg mb-8 text-[#9f836d] px-8 py-4 data-[state=active]:bg-[#9F836D] h-12 data-[state=active]:text-white transition-colors font-bold rounded-xl "
            >
              What We Do
            </TabsTrigger>
            <TabsTrigger 
              value="fund-service-providers"
              className="text-lg mb-8 text-[#9f836d] px-8 py-4 data-[state=active]:bg-[#9F836D] h-12 data-[state=active]:text-white font-bold rounded-xl transition-colors"
            >
              Fund Service Providers
            </TabsTrigger>
            <TabsTrigger 
              value="typical-fund-structure"
              className="text-lg mb-8 text-[#9f836d] px-8 py-4 data-[state=active]:bg-[#9F836D] h-12 data-[state=active]:text-white font-bold transition-colors rounded-xl"
            >
              Typical Fund Structure
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
