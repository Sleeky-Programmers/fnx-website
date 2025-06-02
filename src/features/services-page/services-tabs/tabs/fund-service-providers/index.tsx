"use client";

import TabHeader from "@/components/service/tab-header";
import { motion } from "framer-motion";
import {
  FileText, Scale, PieChart, Building2, ScrollText, ShieldAlert,
  Search, Building, Mail, Shield, Boxes, Users,
  FileSpreadsheet, FileCog, AlertTriangle, BadgeDollarSign,
  AlertCircle, Globe, Rocket, Settings
} from "lucide-react";

interface TabContentProps {
  direction: number;
}

const services = [
  { icon: FileText, label: "Financial Statements Reporting" },
  { icon: Scale, label: "Legal Counsel" },
  { icon: PieChart, label: "Portfolio Management" },
  { icon: Building2, label: "Registered Office" },
  { icon: ScrollText, label: "Regulatory Reporting" },
  { icon: ShieldAlert, label: "Risk Management" },
  { icon: FileCog, label: "Fund Administration" },
  { icon: AlertTriangle, label: "MLRO (Money Laundering Reporting Officer)" },
  { icon: BadgeDollarSign, label: "Prime Brokerage" }
];

const providers = [
  { icon: Search, label: "Audit" },
  { icon: Building, label: "Banking" },
  { icon: Mail, label: "Company Secretarial" },
  { icon: Shield, label: "Custodian" },
  { icon: Boxes, label: "Depositary" },
  { icon: Users, label: "Directorship" },
  { icon: FileSpreadsheet, label: "FATCA / CRS Reporting" },
  { icon: AlertCircle, label: "Distribution" }
];

const cards = [
  {
    icon: Globe,
    title: "Diverse Investment Strategies",
    description: "We work across all strategies, from hedge funds to private markets, ensuring a comprehensive approach tailored to each client's needs."
  },
  {
    icon: Rocket,
    title: "Streamlined Operations",
    description: "Our efficient processes and experienced team ensure smooth operations, allowing you to focus on your core investment activities."
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description: "We provide tailored solutions that adapt to your specific requirements, helping you achieve your investment objectives effectively."
  }
];

export function FundServiceProvidersContent({ direction }: TabContentProps) {
  return (
    <motion.div
      key="fund-service-providers"
      custom={direction}
     
      className="flex justify-center"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">

 <TabHeader 
      title="Fund Service Providers"
      description="We offer our clients the opportunity to launch fund structures by leveraging all key service providers while ensuring regulatory and operational framework is met."
    />


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 mb-16 w-full px-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 rounded-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <card.icon className="h-6 w-6 text-[#9F836D]" />
                <h4 className="text-lg font-semibold text-[#003241]">{card.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#9F836D]/5 rounded-2xl w-full p-8 mb-10">
          <h3 className="text-lg font-bold text-left mb-4 text-[#003241]">Key Providers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {providers.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-3"
              >
                <provider.icon className="h-5 w-5 text-[#9F836D]" />
                <span className="text-xs font-semibold text-[#003241]">{provider.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#9F836D]/5 rounded-2xl w-full p-8">
          <h3 className="text-lg font-bold text-left mb-4 text-[#003241]">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                viewport={{ once: false, amount: 0.2 }}
                className="flex items-center gap-3"
              >
                <service.icon className="h-5 w-5 text-[#9F836D]" />
                <span className="text-xs font-semibold text-[#003241]">{service.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
