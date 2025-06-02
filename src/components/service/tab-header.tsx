import { motion } from "framer-motion";

// Create a reusable TabHeader component
const TabHeader = ({ title, description }: { title: string; description?: string }) => (
  <div className="text-center space-y-6 mt-10 md:mt-5">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-xl sm:text-2xl font-semibold"
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: false }}
      className="h-1 w-24 sm:w-32 bg-[#9F836D] mx-auto origin-center"
    />
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto"
      >
        {description}
      </motion.p>
    )}
  </div>
);
export default TabHeader;