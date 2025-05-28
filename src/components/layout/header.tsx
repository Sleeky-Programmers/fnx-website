"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MenuModal } from "./menu-modal";

function AnimatedMenuIcon() {
  return (
    <div className="flex flex-col justify-center gap-[4px] transition-all duration-300 ease-in-out group-hover:gap-[10px]">
      <span className="w-4 h-[2px] bg-white block transition-all duration-300 ease-in-out"></span>
      <span className="w-4 h-[2px] bg-white block transition-all duration-300 ease-in-out"></span>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { amount: 0.2 });

  const { scrollY } = useScroll();
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
        ref={headerRef}
        style={{
          y: headerY,
          backgroundColor: headerBackground,
          padding: headerPadding,
        }}
        className="fixed top-0 left-0 right-0 z-40 w-full"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="Logo"
                  width={120}
                  height={60}
                  className="w-[100px] h-auto md:w-[120px] transition-all duration-300"
                  priority
                />
              </Link>
            </motion.div>

            {/* Menu Button */}
            <motion.button
              initial={{ y: -100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              onClick={() => setIsOpen(true)}
              className="text-white p-2 z-50 flex items-center gap-2 md:gap-3 group hover:text-md hover:text-gray-200 transition-colors"
              aria-label="Toggle Menu"
            >
              <span className="text-sm md:text-base font-medium ">MENU</span>
              <AnimatedMenuIcon />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
