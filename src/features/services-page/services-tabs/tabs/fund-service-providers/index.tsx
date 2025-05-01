"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FileText, 
  Scale, 
  PieChart, 
  Building2, 
  ScrollText, 
  ShieldAlert,
  Search,
  Building,
  Mail,
  Shield,
  Boxes,
  Users,
  FileSpreadsheet,
  FileCog,
  AlertTriangle,
  BadgeDollarSign,
  AlertCircle,
  Globe,
  Rocket,
  Settings
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
  { icon: AlertTriangle, label: "MLRO" },
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
  { icon: Globe, title: "Diverse Investment Strategies", description: "We work across all strategies, from hedge funds to private markets, ensuring a comprehensive approach tailored to each client's needs." },
  { icon: Rocket, title: "Diverse Investment Strategies", description: "We work across all strategies, from hedge funds to private markets, ensuring a comprehensive approach tailored to each client's needs." },
  { icon: Settings, title: "Diverse Investment Strategies", description: "We work across all strategies, from hedge funds to private markets, ensuring a comprehensive approach tailored to each client's needs." }
];

export function FundServiceProvidersContent({ direction }: TabContentProps) {
  return (
    <motion.div
      key="fund-service-providers"
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
        <div className="flex flex-col items-center text-center mb-10"> 
        <h2 className="text-2xl font-semibold mb-2">Fund Service Providers</h2>
        <div className="h-1 w-32 bg-[#9F836D] mb-4" />
        <p className="text-gray-600 mb-12 max-w-3xl">
          We offer our clients the opportunity to launch fund structures by leveraging all key service providers while ensuring regulatory and operational framework is met.
        </p>
        </div>
 {/* Cards Row */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-xs hover:shadow-md p-6 rounded-lg flex flex-col items-center text-left">
             <div className='flex'> <card.icon className="h-8 w-8 text-[#9F836D]" />
              <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
              </div>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Row 1: Image left, Services right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="relative w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Fund-Service-Providers1.png"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-6 font-bold bg-[#9F836D]/10 rounded-lg py-6">
            {providers.map((provider, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700 ml-5">
                <provider.icon className="h-5 w-5 text-[#9F836D]" />
                <span className="text-sm">{provider.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Providers left, Image right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-20 font-bold">
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 bg-[#9F836D]/10 rounded-lg py-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700 ml-5 ">
                <service.icon className="h-5 w-5 text-[#9F836D]" />
                <span className="text-sm">{service.label}</span>
              </div>
            ))}
          </div>

          <div className="relative w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Fund-Service-Providers2.png"
              alt="Financial analysis"
              fill
              className="object-cover"
            />
          </div>
        </div>

       
      </div>
    </motion.div>
  );
}
