
import React from 'react';

const DryCleaningBanner = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-start justify-center gap-16">
        
        {/* Text Section */}
        <div
          className="text-left flex flex-col justify-center"
          style={{ width: '836px', height: '295px' }}
        >
          <h2 className="text-red-600 text-3xl font-bold mb-6">
            Dry Cleaning Any Dirt Inside The Car.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our dry and dirt cleaning process employs state-of-the-art technology and eco-friendly solutions to gently remove grime and restore your vehicle's pristine shine.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Using advanced techniques, we eliminate dirt effectively while preserving your car's finish, ensuring a thorough clean without compromising its integrity. Experience superior care with our dry and dirt cleaning service.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="flex-shrink-0"
          style={{ width: '550px', height: '400px' }}
        >
          <img
            src="image2.jpg" // Replace with actual image path
            alt="Volkswagen interior being cleaned"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DryCleaningBanner;


