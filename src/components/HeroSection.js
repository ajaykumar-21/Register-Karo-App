import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden"
    >
      {/* Glass effect container */}
      <motion.div
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl max-w-3xl w-full z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Register Your Business <br className="hidden sm:block" />
          <span className="text-yellow-300">Hassle-Free</span>
        </motion.h1>

        <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto">
          Simplified legal solutions to get your business up and running
          effortlessly — no paperwork headaches.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-xl hover:bg-yellow-300 transition-all duration-200"
        >
          🚀 Get Started
        </motion.button>
      </motion.div>

      {/* Background flare */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-30 z-0 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-400 rounded-full filter blur-3xl opacity-30 z-0 animate-pulse"></div>
    </section>
  );
}

export default HeroSection;
