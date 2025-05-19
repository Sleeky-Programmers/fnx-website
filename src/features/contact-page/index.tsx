"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Full-page Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-images/contact.jpg"
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-6xl text-white px-4 sm:px-8">
        {/* Hero Text */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact our West53 team</h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Our team is very happy to answer your questions. <br />
            Fill out the form and we’ll be in touch as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 text-center">
          {[
            {
              icon: <FaPhoneAlt className="text-sm p-2 mb-2 h-10 w-10 rounded-full bg-white text-[#9F836D]" />,
              title: "Call us",
              info: "+353 1 575 6091",
              delay: 0.2,
            },
            {
              icon: (
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mb-2">
                  <FaEnvelope className="text-[#9F836D] text-lg" />
                </div>
              ),
              title: "Email us",
              info: "enquiry@west53.ie",
              delay: 0.4,
            },
            {
              icon: <FaGlobe className="text-sm p-2 mb-2 h-10 w-10 rounded-full bg-white text-[#9F836D]" />,
              title: "Visit us",
              info: "www.west53.ie",
              delay: 0.6,
            },
          ].map(({ icon, title, info, delay }, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay }}
              className="flex flex-col items-center"
            >
              {icon}
              <h4 className="text-xl font-semibold mb-1">{title}</h4>
              <p className="text-white/90">{info}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
            className="bg-white p-6 sm:p-4 rounded-2xl shadow-md space-y-6 text-gray-700 font-bold max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Input your email"
                className="w-full p-3 rounded bg-white text-black border font-normal"
              />
            </div>
            <div>
              <label className="block mb-1">Your Full name</label>
              <input
                type="text"
                placeholder="Input your full name"
                className="w-full p-3 rounded bg-white text-black border font-normal"
              />
            </div>
            <div>
              <label className="block mb-1">Subject</label>
              <input
                type="text"
                placeholder="Input a subject"
                className="w-full p-3 rounded bg-white text-black border font-normal"
              />
            </div>
            <div>
              <label className="block mb-1">Company Website</label>
              <input
                type="text"
                placeholder="Input your company website"
                className="w-full p-3 rounded bg-white text-black border font-normal"
              />
            </div>
          </div>
          <div className="mx-4">
            <label className="block mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Input your message here"
              className="w-full p-3 rounded bg-white text-black resize-none border font-normal"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#9F836D] text-white font-semibold px-10 py-2 rounded hover:bg-[#9F837D] transition"
            >
              Send
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
