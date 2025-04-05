import React from "react";

function NavBar() {
  return (
    <nav className="bg-gray-100 shadow-md py-4 px-6 flex justify-between items-center pl-32">
      <div className="text-2xl font-bold text-blue-800">
        Register <span className="text-blue-400">Karo</span>
      </div>
      <div className="flex justify-between items-center">
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
    </nav>
  );
}

export default NavBar;
