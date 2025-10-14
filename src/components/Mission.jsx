import React from 'react';

const CarWashBanner = () => {
  return (
    <div className="w-full bg-white pl-6 pr-0 pt-6 pb-6 md:pl-12 md:pr-0 md:pt-12 md:pb-12 shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-center">

      
      {/* Text Section */}
      <div
        className="text-left"
        style={{ width: '980px', height: '295px' }}
      >
        <h2 className="text-red-600 text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our premier car wash service center in Noida. We offer an unparalleled car cleaning experience with three comprehensive packages: Routine clean, Dry clean, and Deep clean. Our cutting-edge technology and skilled staff ensure top-notch results for every vehicle. For added convenience, we provide pick-up and drop-off services for deep cleans, allowing you to focus on your day while we pamper your car. At our center, customer satisfaction is our priority, and we take pride in delivering excellence in every wash. Join us to experience the ultimate care for your vehicle with our professional and reliable services. Book now for a spotless, shining car ready to hit the road, and let us elevate your driving experience today.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="mt-8 md:mt-0 "
        style={{ width: '818px', height: '258px' }}
      >
        <img
          src="image13.jpg" // Replace with actual image path
          alt="Red sports car"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default CarWashBanner;
