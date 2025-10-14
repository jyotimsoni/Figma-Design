
import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Logo</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            Our premier car wash service center in Noida offers an unparalleled
            car cleaning experience with three comprehensive packages: Routine
            clean, Dry clean, and Deep clean. Our cutting-edge technology and
            skilled staff ensure top-notch results for every vehicle.
          </p>
          <p className="text-xs mt-4 text-gray-300">
            ©2023 Car Wash. All Rights Reserved
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-sm font-bold mb-3">PAGES</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Cars */}
        <div>
          <h3 className="text-sm font-bold mb-3">CARS</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>HatchBack</li>
            <li>Sedan</li>
            <li>SUV</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>Routine Clean</li>
            <li>Dry Clean</li>
            <li>Deep Clean</li>
          </ul>
        </div>
      </div>

      {/* Contact & Social */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-200 space-y-1 text-center md:text-left">
          <p>+91 7017866149</p>
          <p className="text-gray-100 font-medium">info@wowkaar.com</p>
          <p>Noida, NOIDA</p>
          <p>NOIDA, Delhi NCR, UP</p>
        </div>

        <div className="flex space-x-4 text-xl text-gray-300">
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;