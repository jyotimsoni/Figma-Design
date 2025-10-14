import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import WashingCleaning from "./components/WashingCleaning";
import DryCleaning from "./components/DryCleaning";
import Services from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Mission />
      <Vision />
      <WashingCleaning />
      <DryCleaning />
      <Services />
      <WhoWeAre />
      <Footer />
    </div>
  );
}
