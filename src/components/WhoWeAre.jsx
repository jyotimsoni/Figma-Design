import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="image10.jpg"
              alt="Founder"
              className="rounded-full w-48 h-48 object-cover"
            />
            <div className="mt-3 text-center md:text-left">
              <h3 className="text-[#003366] font-bold uppercase text-sm">
                LUKA LOJK
              </h3>
              <p className="text-xs text-gray-600">FOUNDER & CEO</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              Who We Are?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              “Our aim is to redefine car care, providing unmatched quality and
              convenience. We strive to ensure a seamless, top-tier experience
              for our customers, setting new standards in the industry with our
              innovative approach and customer-centric services.”
            </p>

            <div className="flex items-start gap-3 text-[#003366] font-semibold">
              <FaQuoteLeft className="text-2xl mt-1" />
              <p className="italic">
                "Drive clean, drive happy; we make your journey shine."
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#003366] mb-6">
            Frequently Asked Questions (FAQs)
          </h3>

          <div className="space-y-6 text-gray-800">
            <div>
              <p className="font-semibold">
                Ques. What’s the recommended frequency for a deep clean ?
              </p>
              <p className="text-sm">
                Ans. We suggest a deep clean every 2-3 months, depending on your
                usage and environmental exposure.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Ques. Are the cleaning products safe for all car finishes ?
              </p>
              <p className="text-sm">
                Ans. Yes, our products are safe and tailored for various car
                finishes, ensuring no damage to your vehicle.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Ques. Do you offer any warranty or guarantee on the cleaning
                service?
              </p>
              <p className="text-sm">
                Ans. We take pride in our work and offer a satisfaction
                guarantee. If you’re not happy, we’ll make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;