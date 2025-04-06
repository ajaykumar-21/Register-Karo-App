import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center overflow-hidden"
    >
      {/* Decorative Blur Circles */}
      <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-white opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Register Your Business?
        </motion.h2>

        <p className="text-lg md:text-xl text-white/90 mb-8">
          Our experts are here to simplify the process for you. Fast, reliable &
          hassle-free!
        </p>

        <motion.button
          className="relative mt-4 px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-xl hover:bg-gray-100 transition-all"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started Now 🚀
          <span className="absolute inset-0 rounded-full ring-2 ring-white animate-pulse opacity-20"></span>
        </motion.button>
      </div>
    </section>
  );
}

export default Contact;
