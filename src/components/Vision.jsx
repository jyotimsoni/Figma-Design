import React from 'react';

const VisionBanner = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
      
      {/* Text Section */}
      <div
        className="text-left"
        style={{ width: '836px', height: '295px' }}
      >
        <h2 className="text-red-600 text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Envisioning a future where every vehicle shines, our vision is to be the forefront of the car wash industry, setting new standards of excellence. We aspire to create a network of environmentally responsible car care centers that prioritize water conservation and eco-friendly practices. Our goal is to revolutionize the way people perceive car washing, making it an effortless and enjoyable experience. By embracing cutting-edge technology and sustainable methodologies, we aim to be a driving force towards a cleaner, greener, and more vibrant automotive landscape.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="flex-shrink-0"
        style={{ width: '550px', height: '400px' }}
      >
        <img
          src="image5.jpg" // Replace with actual image path
          alt="Man cleaning car windshield"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default VisionBanner;
