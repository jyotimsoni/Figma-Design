import React from "react";

const CarWashBanner = () => {
  return (
    <div className="w-full bg-white py-10 px-6 md:px-12 shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          About Us
        </h2>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          Welcome to our premier car wash service center in Noida. We offer an
          unparalleled car cleaning experience with three comprehensive packages:
          Routine clean, Dry clean, and Deep clean. Our cutting-edge technology
          and skilled staff ensure top-notch results for every vehicle. For added
          convenience, we provide pick-up and drop-off services for deep cleans,
          allowing you to focus on your day while we pamper your car. At our
          center, customer satisfaction is our priority, and we take pride in
          delivering excellence in every wash. Join us to experience the ultimate
          care for your vehicle with our professional and reliable services. Book
          now for a spotless, shining car ready to hit the road, and let us
          elevate your driving experience today.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="image13.jpg" // Replace with actual image path
          alt="Red sports car"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default CarWashBanner;
