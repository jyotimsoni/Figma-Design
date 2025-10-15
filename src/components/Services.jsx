import React from "react";
import { FaSnowflake, FaShieldAlt, FaSun, FaWind } from "react-icons/fa";

const services = [
  {
    icon: <FaSnowflake size={40} />,
    title: "Contactless Washing",
    description:
      "Vestibulum tortor risus, rutrum at congue sed ultricies finibus.",
    rating: 4,
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Safety Materials",
    description:
      "Cras aliquam tristique metus, eu gravida diam vestibulum gravida.",
    rating: 4.5,
  },
  {
    icon: <FaSun size={40} />,
    title: "Modern Equipment",
    description:
      "Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.",
    rating: 4,
  },
  {
    icon: <FaWind size={40} />,
    title: "Extensive Cleaning",
    description:
      "Vestibulum non dolor sit amet mi moles tincidunt vel non velit.",
    rating: 4,
  },
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<span key={i}>★</span>);
    } else if (rating >= i - 0.5) {
      stars.push(<span key={i}>☆</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }
  return <div className="text-red-600 mt-2 text-lg">{stars}</div>;
};

// Main Component
const Service = () => {
  return (
    <section className="py-12 px-6 sm:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600">
          Our Washing <span className="text-red-600">Services</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm lg:text-base text-red-600 uppercase tracking-wide">
          With <span className="font-semibold">Modern Equipment</span>
        </p>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <StarRating rating={service.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
