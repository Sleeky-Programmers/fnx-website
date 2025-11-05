"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getContactPage } from "@/lib/api";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getContactPage();
      setPageData(data);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.target as HTMLFormElement);
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mgvzzbrb";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "success" : "error");
      if (response.ok) (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  };

  if (!pageData) return <div className="text-center py-20">Loading contact page...</div>;

  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={pageData.backgroundImage || "/bg-images/contact.jpg"}
          alt="Contact background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-6xl text-white px-4 sm:px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{pageData.heading}</h2>
          {pageData.subheading && (
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              {pageData.subheading}
            </p>
          )}
        </motion.div>

        {/* Contact Info Row */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 text-center">
          {[
            { icon: <FaPhoneAlt />, title: "Call us", info: pageData.phone },
            { icon: <FaEnvelope />, title: "Email us", info: pageData.email },
            { icon: <FaGlobe />, title: "Visit us", info: pageData.website },
          ]
            .filter((item) => item.info)
            .map(({ icon, title, info }, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mb-2 text-[#9F836D] text-lg">
                  {icon}
                </div>
                <h4 className="text-xl font-semibold mb-1">{title}</h4>
                <p className="text-white/90">{info}</p>
              </motion.div>
            ))}
        </div>

<motion.form
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 1, delay: 1 }}
  className="bg-white p-6 sm:p-4 rounded-2xl shadow-md space-y-6 text-gray-700 font-bold max-w-4xl mx-auto"
   onSubmit={handleSubmit}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-4">
    <div>
      <label className="block mb-1">Email</label>
      <input
      name="email"
        type="email"
        placeholder="Input your email"
        className="w-full p-3 rounded bg-white text-black border font-normal border-[#9F836D] focus:shadow-md focus:shadow-[#9F836D]/30 focus:outline-none focus:border-[#9F836D]"
      />
    </div>
    <div>
      <label className="block mb-1">Your Full name</label>
      <input
      name="name"
        type="text"
        placeholder="Input your full name"
        className="w-full p-3 rounded bg-white text-black border font-normal border-[#9F836D] focus:shadow-md focus:shadow-[#9F836D]/30 focus:outline-none focus:border-[#9F836D]"
      />
    </div>
    <div>
      <label  className="block mb-1">Subject</label>
      <input
        type="text"
        name="subject"
        placeholder="Input a subject"
        className="w-full p-3 rounded bg-white text-black border font-normal border-[#9F836D] focus:shadow-md focus:shadow-[#9F836D]/30 focus:outline-none focus:border-[#9F836D]"
      />
    </div>
    <div>
      <label className="block mb-1">Company Website</label>
      <input
      name="company"
        type="text"
        placeholder="Input your company website"
        className="w-full p-3 rounded bg-white text-black border font-normal border-[#9F836D] focus:shadow-md focus:shadow-[#9F836D]/30 focus:outline-none focus:border-[#9F836D]"
      />
    </div>
  </div>
  <div className="mx-4">
    <label className="block mb-1">Message</label>
    <textarea
    name="message"
      rows={5}
      placeholder="Input your message here"
      className="w-full p-3 rounded bg-white text-black resize-none border font-normal border-[#9F836D] focus:shadow-md focus:shadow-[#9F836D]/30 focus:outline-none focus:border-[#9F836D]"
    />
  </div>
  <div className="text-center">
    <button
      type="submit"
      className="bg-[#9F836D] text-white font-semibold px-10 py-2 rounded hover:bg-[#9F837D] transition"
   disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send"}
            </button>
  </div>
</motion.form>

   {/* Popup */}
        {status === "success" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-8 rounded-2xl shadow-lg max-w-sm text-center"
            >
              <h2 className="text-2xl font-bold mb-2 text-[#9F836D]">Thank you!</h2>
              <p className="text-gray-700 mb-4">Your message has been sent successfully.</p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-[#9F836D] text-white font-semibold px-6 py-2 rounded hover:bg-[#9F837D] transition"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}

        {/* Optional: error handling */}
        {status === "error" && (
          <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded">
            Something went wrong. Please try again.
          </div>
        )}

      </div>
    </section>
  );
}
