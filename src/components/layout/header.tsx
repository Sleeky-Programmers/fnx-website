"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MenuModal } from "./menu-modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Only enable transform after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const headerY = useTransform(scrollY, [0, 100], ["0%", "-100%"]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 31, 63, 0)", "rgba(7, 8, 8, 0.04)"]
  );
  const headerPadding = useTransform(scrollY, [0, 100], ["2rem", "1rem"]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        style={{
          y: mounted ? headerY : 0,
          backgroundColor: headerBackground,
          padding: headerPadding,
        }}
        className="fixed top-0 left-0 right-0 z-40 w-full "
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-full">
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
                  width={120} 
                  height={60}
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
              className="text-white p-2 z-50 flex items-center gap-2 hover:text-gray-200 transition-colors"
              aria-label="Toggle Menu"
            >
              <span className="text-sm font-medium">MENU</span>
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}