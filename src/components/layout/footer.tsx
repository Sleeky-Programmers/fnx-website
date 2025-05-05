"use client";

import Image from 'next/image';
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin } from 'react-icons/fa';
import { usePathname } from 'next/navigation';


const companyLinks = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/services" },
  { name: "Values", href: "/values" },
  { name: "Team", href: "/teams" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Disclaimer", href: "#disclaimer" },
  { name: "Privacy Policy", href: "#privacy" },
  { name: "SFDR Disclosures", href: "#sfdr" },
];

export function Footer() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const pathname = usePathname();

  const highlightColor = "text-[#9F836D]";
  const defaultColor = "text-gray-400";
  return (
    // #003241
    <footer ref={sectionRef} className="bg-[#003241] text-white pt-12 pb-4 pl-16"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 w-full">
          {/* Logo and Company Info */}
          <div className="md:col-span-6 ">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={60}
              />
            </Link>
            
            <div className="space-y-2 text-gray-400 text-sm max-w-4xl">
            <p className="flex items-start">
                <span className="text-[#9F836D] mr-2">◆</span>
                <span>FNX Dublin Limited is registered in the Republic of Ireland with <span className="font-semibold text-gray-300">Company Number 682114</span>.</span>
              </p>
              <p className="flex items-start">
                <span className="text-[#9F836D] mr-2">◆</span>
                <span>FNX Limited is registered in the Republic of Ireland with <span className="font-semibold text-gray-300">Company Number 735711</span>.</span>
              </p>
              <p className="flex items-start">
                <span className="text-[#9F836D] mr-2">◆</span>
                <span>FNX Dublin Limited is authorized under AIFMD by Central Bank of Ireland with <span className="font-semibold text-gray-300">registration number C144669</span>.</span>
              </p>
</div>

            
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 text-[#9F836D] bg-[#003241] transition-colors"
            >
      
               <FaLinkedin className="text-2xl " />
            </Link>
          </div>
<div className="flex flex-col md:flex-row md:col-span-6 gap-8">
          {/* Company Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      pathname === link.href ? highlightColor : defaultColor
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div 
            className="md:col-span-3 ml-12"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#9F836D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
             {/* Copyright */}
        <div className=" pt-8">
        <p className="text-sm text-gray-400">© All Rights Reserved.</p>
        </div>
          </motion.div>
        </div>
        </div>

       
      </div>
    </footer>
  );
}
