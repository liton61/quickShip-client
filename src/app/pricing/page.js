import { getAllPrice } from "@/components/utils/getAllPricing";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const page = async () => {
  const pricing = await getAllPrice();
  console.log(pricing);
  return (
    <div>
      <div>
        <div className="bg-gray-100 py-10   flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((pricingData) => (
              <div
                key={pricingData._id}
                className="bg-white mt-24 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <Link href={`/pricing/${pricingData._id}`}>
                  <div className="p-1 bg-blue-500"></div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {pricingData.level}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Perfect for growing businesse
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
        {/* <div className="bg-gray-100 py-10 mb-12  flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((pricingData) => (
              <div
                key={pricingData._id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <Link href={`/pricing/${pricingData._id}`}>
                  <div className="p-1 bg-blue-500"></div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {pricingData.price_name}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Perfect for growing businesse
                    </p>
                    <p className="text-4xl font-bold text-gray-800 mb-6">
                      {" "}
                      $59.99 <span className="text-sm font-normal">
                        / once
                      </span>{" "}
                    </p>
                    <ul className="text-base text-gray-600 mb-6">
                      <li className="mb-3 flex font-bold items-center gap-2">
                        <FaCheck className="text-blue-500" />
                        Cheeseburger
                      </li>
                      <li className="mb-3 flex font-bold  items-center gap-2">
                        <FaCheck className="text-blue-500" />
                        Small French Fries{pricingData.advancedFeatures}
                      </li>
                      <li className="mb-3 flex font-bold items-center gap-2">
                        <FaCheck className="text-blue-500" />
                        Little Coca - Cola
                      </li>
                      <li className="mb-3 flex font-bold items-center gap-2">
                        <FaCheck className="text-blue-500" />
                        Free Delivery
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <button className="w-full font-bold bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-white hover:text-[#ffba00] hover:border border-[#ffba00] focus:outline-none focus:shadow-outline-green active:bg-green-800">
                      Buy Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
