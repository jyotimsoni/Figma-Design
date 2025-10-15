import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('image1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative text-center text-white z-10 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          About Us
        </h2>
        <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          We offer professional car washing and detailing services that bring
          your vehicle back to life.
        </p>
      </div>
    </section>
  );
}
