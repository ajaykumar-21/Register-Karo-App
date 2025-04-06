import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400">
            Register Karo
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Simplifying your business registrations & legal compliance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Quick Links</h4>
          <div className="flex flex-col gap-1">
            <a
              href="#services"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <button className="hover:text-blue-400 transition">
              <Facebook size={22} />
            </button>
            <button className="hover:text-blue-400 transition">
              <Twitter size={22} />
            </button>
            <button className="hover:text-blue-400 transition">
              <Linkedin size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Register Karo. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
