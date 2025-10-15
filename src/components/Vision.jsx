
import React from "react";

const VisionBanner = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          Envisioning a future where every vehicle shines, our vision is to be
          at the forefront of the car wash industry, setting new standards of
          excellence. We aspire to create a network of environmentally
          responsible car care centers that prioritize water conservation and
          eco-friendly practices. Our goal is to revolutionize the way people
          perceive car washing, making it an effortless and enjoyable
          experience. By embracing cutting-edge technology and sustainable
          methodologies, we aim to be a driving force towards a cleaner,
          greener, and more vibrant automotive landscape.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="image5.jpg" // Replace with actual image path
          alt="Man cleaning car windshield"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-cover rounded-md shadow-md"
        />
      </div>
    </section>
  );
};

export default VisionBanner;
