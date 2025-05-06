"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";

export type TeamMember = {
  name: string;
  title: string;
  photo: string;
  bio: string;
  linkedin?: string;
};

export function TeamMemberCard({
  member,
  isReversed,
}: {
  member: TeamMember;
  isReversed: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 190;
  const showReadMore = member.bio.length > maxLength;
  const bioText = expanded
    ? member.bio
    : member.bio.slice(0, maxLength) + (showReadMore ? "..." : "");

  return (
    <div
    className={`flex flex-col ${
      isReversed ? "md:flex-row-reverse" : "md:flex-row"
    } items-center md:items-start gap-8 md:gap-10`}
  >
  
      {/* Image */}
      <motion.div
        initial={{ x: isReversed ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center"
      >
       <div className="relative w-full h-64 sm:h-72 md:h-80 max-w-xs sm:max-w-sm md:max-w-md rounded-lg overflow-hidden shadow-md">

          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ x: isReversed ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-2/3 max-w-xl flex flex-col justify-center"
      >
        <h3 className="text-2xl font-bold mb-2 text-[#161C2D]">{member.name}</h3>
        <p className="text-lg text-[#9F836D] mb-4">{member.title}</p>
        <p
          className="text-gray-700 cursor-pointer"
          onClick={() => showReadMore && setExpanded(!expanded)}
        >
          {bioText}{" "}
          {showReadMore && (
            <span className="text-[#000000]/50">
              {expanded ? "" : "Read more"}
            </span>
          )}
        </p>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#9F836D] mt-4"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        )}
      </motion.div>
    </div>
  );
}
