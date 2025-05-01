"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { MenuModal } from "@/components/layout/menu-modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "bg-black-500/10" : ""}`}>
      <div className={`container mx-auto px-4 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={isScrolled ? 90 : 120} 
                height={isScrolled ? 45 : 60}
                className="transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Menu Button */}
          <motion.button
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="text-white p-2 z-50 flex"
            aria-label="Toggle Menu"
          >
            MENU <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
