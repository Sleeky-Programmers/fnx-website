"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { WhatWeDoContent } from "./tabs/what-we-do";
import { FundServiceProvidersContent } from "./tabs/fund-service-providers";
import { TypicalFundStructureContent } from "./tabs/typical-fund-structure";

const TAB_ORDER = ["what-we-do", "fund-service-providers", "typical-fund-structure"];

export function ServicesTabs() {
  const [selectedTab, setSelectedTab] = useState("what-we-do");
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isInitialMount, setIsInitialMount] = useState(true);

  const currentIndex = useMemo(() => TAB_ORDER.indexOf(selectedTab), [selectedTab]);

  const handleTabChange = (value: string) => {
    const newIndex = TAB_ORDER.indexOf(value);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelectedTab(value);
  };

  const scrollToTab = (index: number) => {
    const section = sectionRefs.current[index];
    section?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  useEffect(() => {
    // Prevent auto-scroll on initial mount
    if (isInitialMount) {
      setIsInitialMount(false);
      return;
    }
    
    const index = TAB_ORDER.indexOf(selectedTab);
    scrollToTab(index);
  }, [selectedTab, isInitialMount]);

  return (
    <section className="py-8 md:py-24 bg-white">
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
          
          {/* Swipeable Content Area */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4 space-x-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {TAB_ORDER.map((tab, idx) => (
              <div
                key={tab}
                ref={el => { sectionRefs.current[idx] = el; }}
                className="min-w-full snap-start"
              >
                {tab === "what-we-do" && <WhatWeDoContent direction={direction} />}
                {tab === "fund-service-providers" && <FundServiceProvidersContent direction={direction} />}
                {tab === "typical-fund-structure" && <TypicalFundStructureContent direction={direction} />}
              </div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}