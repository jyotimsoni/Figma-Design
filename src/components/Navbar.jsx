import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-600 px-12 py-4 flex items-center justify-between">
      {/* px-12 = 48px horizontal padding */}
      <div className="text-white font-bold text-xl">Logo</div>
      <div className="flex space-x-8 items-center text-base">
        <span className="text-white">Services</span>
        <span className="bg-white text-red-600 px-4 py-2 rounded font-semibold">About Us</span>
        <span className="text-white">Contact Us</span>
        <span className="bg-red-700 text-white px-4 py-2 rounded shadow flex items-center gap-2">
          <span className="text-white">Profile</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
