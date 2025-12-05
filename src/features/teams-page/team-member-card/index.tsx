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
  const maxLength = 200;
  
  const cleanBio = member.bio
    .replace(/\s+/g, ' ') 
    .replace(/\n/g, ' ') 
    .trim();              
  
  const showReadMore = cleanBio.length > maxLength;
  const bioText = expanded
    ? cleanBio
    : cleanBio.slice(0, maxLength) + (showReadMore ? "..." : "");

  const imageVariants = {
    hidden: { x: isReversed ? 100 : -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { x: isReversed ? -100 : 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center md:items-start gap-8 md:gap-10`}
    >
      {/* Image */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-full h-64 sm:h-72 md:h-80 max-w-xs sm:max-w-sm md:max-w-md rounded-lg overflow-hidden shadow-md">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="w-full md:w-2/3 max-w-xl flex flex-col justify-center"
        style={{ minWidth: '0' }}
      >
        <h3 className="text-2xl font-bold mb-0.5 text-[#161C2D]">
          {member.name}
        </h3>
        <p className="text-lg text-[#9F836D] mb-2">{member.title}</p>
        <p
          className="text-gray-700 cursor-pointer text-md leading-tight"
          style={{ 
            lineHeight: '1.4',
            wordSpacing: 'normal',
            letterSpacing: 'normal',
            textAlign: 'left'
          }}
          onClick={() => showReadMore && setExpanded(!expanded)}
        >
          {bioText}{" "}
          {showReadMore && (
            <span className="text-[#9F836D]/80">
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