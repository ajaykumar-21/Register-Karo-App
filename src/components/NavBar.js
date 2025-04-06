import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-lg shadow-md px-6 py-4 flex justify-between items-center md:px-32">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-blue-100 tracking-tight drop-shadow-sm">
        Register <span className="text-yellow-300">Karo</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {["services", "testimonials", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-200"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <div className="ml-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-full px-4 py-2 shadow-md transition duration-200">
          📞 +918236009230
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/20 backdrop-blur-lg shadow-lg flex flex-col items-center py-6 space-y-4 z-40 md:hidden animate-fade-in-down">
          {["services", "testimonials", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <div className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-full px-4 py-2 shadow-md transition duration-200">
            📞 +918236009230
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
