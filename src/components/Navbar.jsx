import React from "react";

export default function Navbar() {
  return (
    <header className="bg-red-600 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#mission" className="hover:underline">Mission</a>
          <a href="#vision" className="hover:underline">Vision</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>

          <button><a href="#about" className="hover:underline">Profile</a></button> 
        </nav>
      </div>
    </header>
  );
}
