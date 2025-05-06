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
  { icon: AlertTriangle, label: "MLRO(Money Laundering Reporting Officer)" },
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
      className="flex justify-center px-4 sm:px-6 md:px-8"
    >
   
        <div className="flex flex-col items-center text-center mb-8 mt-5"> 
             <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 mt-10 md:mt-5">
          <h2 className="text-xl sm:text-2xl font-semibold mt-5">Fund Service Providers</h2>
          <div className="h-1 w-24 sm:w-32 bg-[#9F836D]" />
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl px-2 sm:px-0">
            We offer our clients the opportunity to launch fund structures by leveraging all key service providers while ensuring regulatory and operational framework is met.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 px-4 mt-10">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8 rounded-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3">
                  <card.icon className="h-6 w-6 text-[#9F836D]" />
                </div>
                <h4 className="text-lg font-semibold text-[#003241]">{card.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Image and Services Sections */}
        <div className="space-y-16 md:space-y-24">
          {/* Row 1: Image with Providers */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="w-full lg:w-1/2 relative h-full">
              <div className="absolute top-6 left-6 w-full h-full bg-[#9F836D]/10 rounded-2xl" />

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/Fund-Service-Providers1.png"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 bg-[#9F836D]/5 rounded-2xl p-8 h-full flex items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {providers.map((provider, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg">
                        <provider.icon className="h-5 w-5 text-[#9F836D]" />
                      </div>
                      <span className="text-sm font-semibold text-[#003241]">{provider.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Services with Image */}
  <div className="relative">
  <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">
    
    {/* Service Items */}
    <div className="w-full lg:w-2/3 bg-[#9F836D]/5 rounded-2xl p-8 h-full flex items-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-3 grid-row-1">
            <div className="p-2 rounded-lg">
              <service.icon className="h-5 w-5 text-[#9F836D]" />
            </div>
            <span className="text-sm font-semibold text-[#003241]">{service.label}</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Image Section */}
    <div className="w-full lg:w-1/2 relative h-full">
      <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#9F836D]/10 rounded-2xl z-0" />
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
        <Image
          src="/Fund-Service-Providers2.png"
          alt="Financial analysis"
          fill
          className="object-cover"
        />
      </div>
    </div>

  </div>
</div>
        </div>
      </div>
    </motion.div>
  );
}