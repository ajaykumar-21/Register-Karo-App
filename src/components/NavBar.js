import React from "react";

function NavBar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Register Karo</h1>
      <div>
        <a href="#services" className="mx-4 text-gray-700 hover:text-blue-600">
          Services
        </a>
        <a
          href="#testimonials"
          className="mx-4 text-gray-700 hover:text-blue-600"
        >
          Testimonials
        </a>
        <a href="#contact" className="mx-4 text-gray-700 hover:text-blue-600">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
