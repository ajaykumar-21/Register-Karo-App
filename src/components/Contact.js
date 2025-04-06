import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center overflow-hidden"
    >
      {/* Decorative Animated Blurs */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl animate-ping z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Register Your Business?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let our experts help you kickstart your entrepreneurial journey. No
          paperwork stress — just fast, secure, and simplified legal solutions.
        </motion.p>

        <motion.button
          className="relative mt-4 px-10 py-4 bg-white text-blue-700 font-bold text-lg rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-200"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started Now 🚀
          <span className="absolute inset-0 rounded-full ring-2 ring-white animate-pulse opacity-20 z-[-1]"></span>
        </motion.button>
      </div>
    </section>
  );
}

export default Contact;
