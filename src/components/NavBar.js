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
      <div className="hidden md:flex justify-between items-center">
        <div>
          <a
            href="#services"
            className="mx-4 font-bold text-xl text-gray-500 hover:text-gray-700"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="mx-4 font-bold text-xl text-gray-500 hover:text-gray-700"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="mx-4 font-bold text-xl text-gray-500 hover:text-gray-700"
          >
            Contact
          </a>
        </div>
        <div className="mx-4 font-bold text-blue-800 hover:text-gray-700 bg-yellow-500 rounded-full p-2 pr-4">
          <span>📞 </span>+918236009230
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center z-10 md:hidden">
          <a
            href="#services"
            className="py-2 font-bold text-xl text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="py-2 font-bold text-xl text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="py-2 font-bold text-xl text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="py-2 font-bold text-blue-800 hover:text-gray-700 bg-yellow-500 rounded-full p-2 px-4 my-2">
            <span>📞 </span>+918236009230
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
