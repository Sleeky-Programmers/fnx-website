"use client";

import { useState, useEffect, useRef } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { WhatWeDoContent } from "./tabs/what-we-do";
import { FundServiceProvidersContent } from "./tabs/fund-service-providers";
import { TypicalFundStructureContent } from "./tabs/typical-fund-structure";

const TAB_ORDER = ["what-we-do", "fund-service-providers", "typical-fund-structure"];
const TAB_LABELS: Record<string, string> = {
  "what-we-do": "What We Do",
  "fund-service-providers": "Fund Service Providers",
  "typical-fund-structure": "Typical Fund Structure",
};

function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function ServicesTabs() {
  const [selectedTab, setSelectedTab] = useState("what-we-do");
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabChange = (value: string) => {
    const index = TAB_ORDER.indexOf(value);
    setSelectedTab(value);
    const section = sectionRefs.current[index];
    if (section && containerRef.current) {
      containerRef.current.scrollTo({
        left: section.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = useRef(
    debounce(() => {
      if (!containerRef.current) return;

      const scrollLeft = containerRef.current.scrollLeft;
      const sectionWidths = sectionRefs.current.map((ref) => ref?.offsetWidth || 0);

      let total = 0;
      for (let i = 0; i < sectionWidths.length; i++) {
        total += sectionWidths[i];
        if (scrollLeft < total - sectionWidths[i] / 2) {
          setSelectedTab(TAB_ORDER[i]);
          break;
        }
      }
    }, 100)
  ).current;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="space-y-12 sm:space-y-16">
          {/* Tab Triggers */}
          <TabsList className="w-full flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-16 sm:mb-8 bg-transparent">
            {TAB_ORDER.map((tabKey) => (
              <TabsTrigger
                key={tabKey}
                value={tabKey}
                className="text-sm sm:text-base md:text-lg lg:text-xl h-12 sm:h-14 text-[#9f836d] px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 data-[state=active]:bg-[#9F836D] data-[state=active]:text-white font-bold rounded-xl transition-colors duration-300 hover:bg-[#9F836D]/10 flex-shrink-0 w-full sm:w-auto text-center min-w-0"
              >
                <span className="truncate">{TAB_LABELS[tabKey]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Divider */}
          <div className="h-1 bg-[#9F836D] w-full max-w-6xl mx-auto rounded-full mb-32 sm:mb-0"/>

          {/* Content Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide overflow-y-hidden"
          >
            {TAB_ORDER.map((tab, index) => (
              <div
                key={tab}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="min-w-full snap-start flex justify-center"
              >
                {tab === "what-we-do" && <WhatWeDoContent direction={1} />}
                {tab === "fund-service-providers" && <FundServiceProvidersContent direction={1} />}
                {tab === "typical-fund-structure" && <TypicalFundStructureContent direction={1} />}
              </div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}