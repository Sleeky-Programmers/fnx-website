"use client";

import Image from "next/image";
import { PiHandshakeLight } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiMedal } from "react-icons/ci";

const features = [
  {
    icon: CiMedal,
    title: "A Legacy of Excellence:",
    description: "Our team has worked with hundreds of investment managers over the last thirty years. The feedback from those relationships has led to the reason we launched our firm and the ethos of how we run our business."
  },
  {
    icon: HiOutlineLightBulb,
    title: "Comprehensive Insight:",
    description: "We worked on buy side to the sell side and we feel that helps understand the needs of our clients."
  },
  {
    icon: PiHandshakeLight,
    title: "Strong Relationships:",
    description: "We maintain relationships with clients based on a foundation of trust and mutual respect."
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#003241] mb-2">
            Why choose FNX?
          </h2>
          <div className="h-1 w-16 bg-[#9F836D] mx-auto" />
          <p className="text-lg font-medium text-[#003241] mt-4">
            DECADES OF EXPERTISE BACKED BY TRUST AND INNOVATION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] w-80vw overflow-hidden ml-10">
            <Image
              src="/video-image.png"
              alt="Team collaboration"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 w-90% mr-10">
                <div className="flex-shrink-0">
                  <feature.icon className="h-7 w-7 p-[2px] rounded-full bg-[#9f836d]/30 text-[#9F836D]" />
                </div>
                <div className="">
                  <h3 className="text-xl font-semibold text-[#003241] mb-2 text-left"> 
                    {feature.title}
                  </h3>
                  <p className="text-[#003241] text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}