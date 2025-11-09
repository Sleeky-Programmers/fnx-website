"use client";

import { motion } from "framer-motion";
import { TeamMemberCard } from "../team-member-card";
import { TeamData } from "@/lib/type";

export default function TeamMembersClient({ teamData }: { teamData: TeamData }) {
  const { content, members } = teamData;
  return (
    <section className="py-24 bg-white">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 px-4 sm:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
        >
          {content.title}
        </motion.h2>

        <motion.div className="h-1 w-20 sm:w-24 md:w-32 bg-[#9F836D] mx-auto mb-4 origin-left" />

        <motion.p className="text-md sm:text-base text-gray-600 max-w-3xl mx-auto">
          {content.subtitle}
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-24">
        {members.map((member, index) => (
          <TeamMemberCard key={member.name} member={member} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
