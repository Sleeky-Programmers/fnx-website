"use client";

import { motion } from "framer-motion";
import { TeamMemberCard } from "../team-member-card";
import { teamMembers } from "@/data/team-members";

export function TeamMembers() {
  return (
    <section className="py-24 bg-white">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16 px-4 sm:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
        >
          Meet the Team Behind West53
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="h-1 w-20 sm:w-24 md:w-32 bg-[#9F836D] mx-auto mb-4 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-md sm:text-base text-gray-600 max-w-md sm:max-w-xl md:max-w-3xl mx-auto"
        >
          At West53, our diverse team drives innovation, delivering world-class
          solutions to help clients thrive in a fast-changing world.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl w-90% md:w-full sm:w-full mx-auto px-[7rem] md:px-8 lg:px-[15rem] space-y-24">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={member.name}
            member={member}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
