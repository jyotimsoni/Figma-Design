
import React from 'react';

const ContactBanner = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
      
      {/* Text + Buttons Section */}
      <div
        className="text-left flex flex-col justify-between"
        style={{ width: '836px', height: '295px' }}
      >
        <div>
          <h2 className="text-red-600 text-3xl font-bold mb-4">
            Professional Washing And Cleaning.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            For professional cleaning services or inquiries, get in touch with us at our Noida center. Our dedicated team is ready to assist you.
            <br /><br />
            Contact us via phone or email to schedule your car’s pampering session or to learn more about our specialized cleaning services. Your satisfaction is our priority.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition">
            +91-0000-000000
          </button>
          <button className="bg-white border border-gray-400 text-gray-800 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition">
            Our Services
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="flex-shrink-0"
        style={{ width: '550px', height: '400px' }}
      >
        <img
          src="image3.jpg" // Replace with actual image path
          alt="Car being washed"
          className="w-full h-full object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default ContactBanner;
