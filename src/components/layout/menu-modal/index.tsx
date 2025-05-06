"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react"; 
import { useState } from "react"; 

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { id: "01", name: "What We Do", href: "/services", description: "Expect more from your Management Company" },
  { id: "02", name: "Values", href: "/values", description: "Guided by Simplicity, Powered by Integrity" },
  { id: "03", name: "Team", href: "/teams", description: "Our people make our company. They can make yours too." },
  { id: "04", name: "Contact Us", href: "/contact", description: "Reach out to us with your questions, and we'll be in touch as soon as possible." },
];

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 h-full w-full sm:max-w-sm md:max-w-md bg-white shadow-xl"
          >
           <div className="h-full px-4 py-6 md:p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#003241]">MENU</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-700 font-semibold hover:text-[#001F3F] transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-8">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-2 text-[#003241] group-hover:text-[#003241] transition-colors"
                    >
                      <span className="text-md text-[#003241]">{item.id}</span>
                      <span className="text-2xl md:text-4xl font-semibold text-[#003241] group-hover:text-[#003241] transition-colors">
                        {item.name}
                      </span>

                      <ChevronRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </Link>

                    {/* Animate the description open ONLY if hovered */}
                    {item.description && (
                      <AnimatePresence>
                        {hoveredId === item.id && (
                          <motion.div
                            key="description"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-8 mt-2"
                          >
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}