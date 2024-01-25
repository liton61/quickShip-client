import { getAllPrice } from "@/components/utils/getAllPricing";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

// import { getAllPrice } from "@/components/utils/getAllPricing";

const page = async () => {
  const pricing = await getAllPrice();
  console.log(pricing);
  return (
    <div>
      <div>
        <div className="mx-auto text-center md:w-4/12 my-8">
          <h3 className="text-5xl font-bold uppercase  py-4">Our Pricing</h3>
        </div>

        <div className="bg-gray-100 py-10 mb-12  flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((pricingData) => (
              <div
                key={pricingData._id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <Link href={`/pricing/${pricingData._id}`}>
                  <div className="p-1 bg-[#ffba00]"></div>
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
                        <FaCheck className="text-[#ef8829]" />
                        Cheeseburger
                      </li>
                      <li className="mb-3 flex font-bold  items-center gap-2">
                        <FaCheck className="text-[#ef8829]" />
                        Small French Fries{pricingData.advancedFeatures}
                      </li>
                      <li className="mb-3 flex font-bold items-center gap-2">
                        <FaCheck className="text-[#ef8829]" />
                        Little Coca - Cola
                      </li>
                      <li className="mb-3 flex font-bold items-center gap-2">
                        <FaCheck className="text-[#ef8829]" />
                        Free Delivery
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <button className="w-full font-bold bg-[#ffba00] text-white rounded-full px-4 py-2 hover:bg-white hover:text-[#ffba00] hover:border border-[#ffba00] focus:outline-none focus:shadow-outline-green active:bg-green-800">
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

export default page;
