import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 px-6 sm:px-10 md:px-12 py-4 flex items-center justify-between relative shadow-md">
      {/* Logo */}
      <div className="text-white font-bold text-xl cursor-pointer">Logo</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center text-base font-medium">
        <span className="text-white cursor-pointer hover:text-gray-200 transition">Services</span>
        <span className="bg-white text-red-600 px-4 py-2 rounded font-semibold cursor-pointer">
          About Us
        </span>
        <span className="text-white cursor-pointer hover:text-gray-200 transition">Contact Us</span>
        <span className="bg-red-700 text-white px-4 py-2 rounded shadow cursor-pointer hover:bg-red-800 transition">
          Profile
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-2xl md:hidden focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-red-600 flex flex-col items-center py-6 space-y-4 text-white md:hidden z-50">
          <span className="cursor-pointer hover:text-gray-200 transition">Services</span>
          <span className="bg-white text-red-600 px-5 py-2 rounded font-semibold cursor-pointer">
            About Us
          </span>
          <span className="cursor-pointer hover:text-gray-200 transition">Contact Us</span>
          <span className="bg-red-700 text-white px-5 py-2 rounded shadow cursor-pointer hover:bg-red-800 transition">
            Profile
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

