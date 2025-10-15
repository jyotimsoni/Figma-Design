import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-10 px-6 sm:px-10 lg:px-16">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Logo</h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-200">
            Our premier car wash service center in Noida offers an unparalleled
            car cleaning experience with three comprehensive packages: Routine
            clean, Dry clean, and Deep clean. Our cutting-edge technology and
            skilled staff ensure top-notch results for every vehicle.
          </p>
          <p className="text-xs sm:text-sm mt-4 text-gray-300">
            ©2023 Car Wash. All Rights Reserved
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-base font-bold mb-3 tracking-wide">PAGES</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Cars */}
        <div>
          <h3 className="text-base font-bold mb-3 tracking-wide">CARS</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            <li className="hover:text-white cursor-pointer">HatchBack</li>
            <li className="hover:text-white cursor-pointer">Sedan</li>
            <li className="hover:text-white cursor-pointer">SUV</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-bold mb-3 tracking-wide">SERVICES</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            <li className="hover:text-white cursor-pointer">Routine Clean</li>
            <li className="hover:text-white cursor-pointer">Dry Clean</li>
            <li className="hover:text-white cursor-pointer">Deep Clean</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-10"></div>

      {/* Contact & Social */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Contact Info */}
        <div className="text-sm sm:text-base text-gray-200 space-y-1">
          <p>📞 +91 7017866149</p>
          <p className="text-gray-100 font-medium">✉️ info@wowkaar.com</p>
          <p>📍 Noida, Delhi NCR, UP</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl text-gray-300">
          <FaInstagram className="hover:text-white cursor-pointer transition duration-300" />
          <FaFacebookF className="hover:text-white cursor-pointer transition duration-300" />
          <FaYoutube className="hover:text-white cursor-pointer transition duration-300" />
          <FaTwitter className="hover:text-white cursor-pointer transition duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

