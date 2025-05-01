"use client";

import { motion } from "framer-motion";
import { TeamMemberCard } from "../team-member-card";
import { teamMembers } from "@/data/team-members";


export function TeamMembers() {
  return (
    <section className="py-24 bg-white">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Meet the Team Behind Fnx
        </h2>
        <div className="h-1 w-32 bg-[#9F836D] mx-auto mb-4" />
        <p className="text-md text-gray-600 max-w-3xl mx-auto">
          At Fnx, our diverse team drives innovation, delivering world-class
          solutions to help clients thrive in a fast-changing world.
        </p>
      </motion.div>

      <div className="max-w-7xl w-90% mx-auto px-[7rem] md:px-8 lg:px-[15rem] space-y-24">
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
