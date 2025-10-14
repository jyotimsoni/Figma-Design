import React from "react";

export default function WashingCleaning() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h3 className="text-2xl font-bold text-red-600">
          Professional Washing And Cleaning
        </h3>
        <p className="mt-3 text-gray-600">
          For professional cleaning services or inquiries, get in touch with us at our Noida center. Our dedicated team is ready to assist you. 
Contact us via phone or email to schedule your car's pampering session or to learn more about our specialized cleaning services. Your satisfaction is our priority.
        </p>
        <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700">
          Read More
        </button>
      </div>
      <img src="image3.jpg" alt="washing" className="rounded-lg shadow-lg" />
    </section>
  );
}
