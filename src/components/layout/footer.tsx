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
  { name: "Disclaimer", href: "legal/disclaimer" },
  { name: "Privacy Policy", href: "legal/privacy" },
  { name: "SFDR Disclosures", href: "legal/sfdr" },
];

export function Footer() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const pathname = usePathname();

  const highlightColor = "text-[#9F836D]";
  const defaultColor = "text-gray-400";

  return (
    <footer ref={sectionRef} className="bg-[#003241] text-white pt-12 pb-4 px-4 md:px-16"> 
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-7">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-white.png"
                alt="Logo"
                width={120}
                height={60}
                className="w-24 md:w-32"
              />
            </Link>
            
            <div className="space-y-4 text-gray-400 text-sm max-w-4xl">
             <p className="flex items-start gap-3">
  <span className="text-[#9F836D] flex-shrink-0">◆</span>
  <span>West 53 Capital Limited, trading as West53, is registered in the Republic of Ireland with <span className="font-semibold text-gray-300">Company Number 682114</span>.</span>
</p>
<p className="flex items-start gap-3">
  <span className="text-[#9F836D] flex-shrink-0">◆</span>
  <span>West 53 Advisory Services Limited is registered in the Republic of Ireland with <span className="font-semibold text-gray-300">Company Number 735711</span>.</span>
</p>
<p className="flex items-start gap-3">
  <span className="text-[#9F836D] flex-shrink-0">◆</span>
  <span>West 53 Capital Limited is authorized under AIFMD by Central Bank of Ireland with <span className="font-semibold text-gray-300">registration number C144669</span>.</span>
</p>

            </div>

            <Link 
              href="https://www.linkedin.com/company/west-53-capital-limited"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 text-[#9F836D] hover:text-[#9F836D]/80 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-8 sm:gap-16">
              {/* Company Links */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Company</h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`transition-colors hover:text-[#9F836D] ${
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
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-300 mb-4">Legal</h3>
                <ul className="space-y-3">
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
              </motion.div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">© All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}