"use client";
import usePricing from "@/components/hooks/usePricing";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const [pricing, refetch] = usePricing();
  return (
    <div>
      <div>
        <div className="bg-gray-100 py-20 pt-44">
          <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-0 px-5 gap-8">
            {pricing.map((pricingData) => (
              <div
                key={pricingData._id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <Link href={`/pricing/${pricingData._id}`}>
                  <div className="p-1 bg-blue-500"></div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {pricingData.level}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Perfect for growing business
                    </p>
                    <p className="text-4xl font-bold text-gray-800 mb-6">
                      {" "}
                      $ {pricingData.price}{" "}
                      <span className="text-sm font-normal">/ once</span>{" "}
                    </p>
                    <ul className="text-base text-gray-600 mb-6">
                      <li className="mb-3 flex font-bold items-center gap-2">
                        <FaCheck className="text-blue-500" />{" "}
                        {pricingData.delivery}
                      </li>
                      <li className="mb-3 flex font-bold  items-center gap-2">
                        <FaCheck className="text-blue-500" />
                        {pricingData.tracking}
                      </li>
                      <li className="mb-3 flex font-bold items-center gap-2">
                        <FaCheck className="text-blue-500" />
                        {pricingData.support}
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <button className="w-full font-bold bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 hover:border border-blue-500 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                      Buy Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
