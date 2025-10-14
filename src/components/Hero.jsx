import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-80 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('image1.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative text-center text-white z-10">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-3 max-w-xl mx-auto">
          We offer professional car washing and detailing services that bring
          your vehicle back to life.
        </p>
      </div>
    </section>
  );
}
