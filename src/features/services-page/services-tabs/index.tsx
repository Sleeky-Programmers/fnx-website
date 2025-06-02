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

  function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | null;
    return (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  const handleScroll = debounce(() => {
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
  }, 100);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="space-y-8">
          {/* Tab Triggers */}
          <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-5">
            {TAB_ORDER.map((tabKey) => (
              <TabsTrigger
                key={tabKey}
                value={tabKey}
                className="text-sm md:text-lg h-10 mb-15 text-[#9f836d] px-2 py-2 md:px-8 md:py-4 data-[state=active]:bg-[#9F836D] data-[state=active]:text-white font-bold rounded-xl transition-colors "
              >
                <span className="hidden md:inline">{TAB_LABELS[tabKey]}</span>
                <span className="inline md:hidden">
                  {{
                    "what-we-do": "Overview",
                    "fund-service-providers": "Providers",
                    "typical-fund-structure": "Structure",
                  }[tabKey]}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="gap-2 border-b bg-[#9F836D] w-screen"/>

          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4 space-x-4"
          >
            {TAB_ORDER.map((tab, index) => (
              <div
                key={tab}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="min-w-full snap-start"
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
