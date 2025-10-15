import React from "react";

const DryCleaningBanner = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 lg:gap-16">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center text-left w-full md:w-1/2">
          <h2 className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Dry Cleaning Any Dirt Inside The Car.
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Our dry and dirt cleaning process employs state-of-the-art technology and eco-friendly solutions to gently remove grime and restore your vehicle's pristine shine.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Using advanced techniques, we eliminate dirt effectively while preserving your car's finish, ensuring a thorough clean without compromising its integrity. Experience superior care with our dry and dirt cleaning service.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="image2.jpg" // Replace with actual image path
            alt="Volkswagen interior being cleaned"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DryCleaningBanner;



