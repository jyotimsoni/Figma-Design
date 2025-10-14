import React from 'react';
import { FaSnowflake, FaShieldAlt, FaSun, FaWind } from 'react-icons/fa';

const services = [
  {
    icon: <FaSnowflake size={40} />,
    title: 'Contactless Washing',
    description: 'Vestibulum tortor risus, rutrum at congue sed ultricies finibus.',
    rating: 4,
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: 'Safety Materials',
    description: 'Cras aliquam tristique metus, eu gravida diam vestibulum gravida.',
    rating: 4.5,
  },
  {
    icon: <FaSun size={40} />,
    title: 'Modern Equipment',
    description: 'Fusce maximus molestie nisl, ut dapibus libero vestibulum aliquam.',
    rating: 4,
  },
  {
    icon: <FaWind size={40} />,
    title: 'Extensive Cleaning',
    description: 'Sestibulum non dolor sit amet mi moles tincidunt vel non velit.',
    rating: 4,
  },
];

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
  return <div className="text-blue-600 text-lg">{stars}</div>;
};

const Service = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900">
          Our Washing <span className="text-gray-900">Services</span>
        </h2>
        <p className="mt-2 text-sm text-gray-500 uppercase">
          With <span className="text-blue-700 font-semibold">Modern Equipment</span>
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 p-6 text-center"
            >
              <div className="text-black mb-4">{service.icon}</div>
              <h3 className="text-blue-900 font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <StarRating rating={service.rating} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
