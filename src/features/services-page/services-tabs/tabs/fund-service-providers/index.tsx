"use client";

import { useEffect, useState } from "react";
import TabHeader from "@/components/service/tab-header";
import { motion } from "framer-motion";
import {
  FileText, Scale, PieChart, Building2, ScrollText, ShieldAlert,
  Search, Building, Mail, Shield, Boxes, Users,
  FileSpreadsheet, FileCog, AlertTriangle, BadgeDollarSign,
  AlertCircle, Globe, Rocket, Settings,
  LucideIcon
} from "lucide-react";
import { getServiceSection } from "@/lib/api";


interface TabContentProps {
  direction: number;
}

interface ServiceData {
  section: string;
  title?: string;
  description?: string;
  image?: string;
  cards?: { title: string; description: string }[];
  providers?: { label: string }[];
  services?: { label: string }[];
}

const iconMap: Record<string, LucideIcon> = {
  "Financial Statements Reporting": FileText,
  "Legal Counsel": Scale,
  "Portfolio Management": PieChart,
  "Registered Office": Building2,
  "Regulatory Reporting": ScrollText,
  "Risk Management": ShieldAlert,
  "Fund Administration": FileCog,
  "MLRO (Money Laundering Reporting Officer)": AlertTriangle,
  "Prime Brokerage": BadgeDollarSign,
  "Audit": Search,
  "Banking": Building,
  "Company Secretarial": Mail,
  "Custodian": Shield,
  "Depositary": Boxes,
  "Directorship": Users,
  "FATCA / CRS Reporting": FileSpreadsheet,
  "Distribution": AlertCircle,
  "Diverse Investment Strategies": Globe,
  "Streamlined Operations": Rocket,
  "Customized Solutions": Settings,
};

export function FundServiceProvidersContent({ direction }: TabContentProps) {
  const [data, setData] = useState<ServiceData | null>(null);

useEffect(() => {
  getServiceSection("fund-service-providers")
    .then(setData)
    .catch((err) => console.error("Error fetching service data:", err));
}, []);

  if (!data) {
    return (
      <div className="w-full flex justify-center py-20 text-gray-500">
        Loading fund service providers...
      </div>
    );
  }

  return (
    <motion.div
      key="fund-service-providers"
      custom={direction}
      className="flex justify-center"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="w-full px-4 pb-4">
          <TabHeader
            title={data.title || "Fund Service Providers"}
            description={
              data.description ||
              "We offer our clients the opportunity to launch fund structures by leveraging all key service providers while ensuring regulatory and operational framework is met."
            }
          />
        </div>

        <div
          className="
            w-full
            h-[70vh] sm:h-[40vh] md:h-auto
            overflow-y-auto md:overflow-visible
            px-4
            scrollbar-thin scrollbar-track-transparent
          "
        >
          <div className="space-y-6 pb-6">
            {/* --- Cards Section --- */}
            {data.cards && data.cards.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-5">
                {data.cards.map((card, index) => {
                  const Icon = iconMap[card.title] || Globe;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 rounded-xl"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <Icon className="h-6 w-6 text-[#9F836D]" />
                        <h4 className="text-sm sm:text-lg font-semibold text-[#003241]">
                          {card.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {data.providers && data.providers.length > 0 && (
              <div className="bg-[#9F836D]/5 rounded-2xl w-full p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-left mb-4 text-[#003241]">
                  Primary Fund Service Providers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {data.providers.map((provider, index) => {
                    const Icon = iconMap[provider.label] || Search;
                    return (
                      <motion.div
                        key={index}
                        initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: index * 0.03,
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <Icon className="h-4 w-4 text-[#9F836D] flex-shrink-0" />
                        <span className="text-xs md:text-sm font-semibold text-[#003241]">
                          {provider.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {data.services && data.services.length > 0 && (
              <div className="bg-[#9F836D]/5 rounded-2xl w-full p-4 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {data.services.map((service, index) => {
                    const Icon = iconMap[service.label] || FileText;
                    return (
                      <motion.div
                        key={index}
                        initial={{ x: index % 2 === 0 ? 30 : -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeOut",
                          delay: index * 0.03,
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <Icon className="h-4 w-4 text-[#9F836D] flex-shrink-0" />
                        <span className="text-xs md:text-sm font-semibold text-[#003241]">
                          {service.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
