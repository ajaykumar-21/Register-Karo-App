import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
          <span className="text-yellow-300">
            <Typewriter
              words={["Hassle-Free", "In Minutes", "With Confidence"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
          Simplified legal solutions to get your business up and running
          effortlessly — no paperwork headaches.
        </p>

        <motion.button
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 0.8rem rgba(255, 255, 255, 0.4)",
          }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-xl hover:bg-yellow-300 transition-all duration-200"
        >
          🚀 Get Started
        </motion.button>
      </motion.div>

      {/* Animated Blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-[pulse_5s_ease-in-out_infinite] z-0"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, duration: 6, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-30 animate-[pulse_6s_ease-in-out_infinite] z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, duration: 7, repeatType: "mirror" }}
      />
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-10 flex flex-col items-center text-white"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="text-xs mt-1">Scroll Down</span>
      </motion.div>
    </section>
  );
}

export default HeroSection;
