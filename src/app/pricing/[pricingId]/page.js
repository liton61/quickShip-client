import { getPrice } from "@/components/utils/getAllPricing";
import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingId = async ({ params }) => {
  const { pricingId } = params;
  const price = await getPrice(pricingId);
  console.log(price);
  console.log(params);
  return (
    <div>
      <div className="grid lg:grid-cols-2 items-center justify-center   grid-cols-1">
        {/* delivery services part start */}
        <div className=" flex justify-center mt-10 ml-[18rem]   ">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 mb-6">
              {" "}
              Delivery Service{" "}
            </p>
            <p className="text-2xl font-bold text-blue-500 mb-6">
              {" "}
              {price.level}
            </p>
            <p className="my-8 text-center">
              Our delivery service employs more than 100
              <br /> professional couriers. We will deliver water to
              <br /> your home for 1 hour to anywhere in the city.
            </p>
            <ul className="text-base ml-20 text-gray-800 mb-6">
              <li className="mb-3 flex font-bold items-center gap-2">
                <FaCheck className="text-blue-500" />
                Delivery Service
              </li>
              <li className="mb-3 flex font-bold  items-center gap-2">
                <FaCheck className="text-blue-500" />7 days a week
              </li>
              <li className="mb-3 flex font-bold items-center gap-2">
                <FaCheck className="text-blue-500" />
                8:00 – 22:00 Every day
              </li>
            </ul>
            <div className="p-4">
              <button className="w-full font-bold bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 hover:border border-blue-500 focus:outline-none focus:shadow-outline-green ">
                Read More
              </button>
            </div>
          </div>
        </div>
        {/* delivery services part end */}

        {/* delivary form section start */}
        <div className="my-5 mr-[5rem] mt-32">
          <div className="py-5 ">
            <form className="">
              <div className="flex items-center justify-center  ">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                  <div className="flex flex-col justify-center p-8 md:p-14">
                    <span className="mb-3 text-4xl text-center text-blue-500 font-bold">
                      Please, fill delivery <br /> form
                    </span>

                    <div className="py-2">
                      <span className=" font-bold text-md">Name</span>
                      <input
                        className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="name"
                        required
                        placeholder="Enter Your Name"
                        name="name"
                      />
                    </div>
                    <div className="py-2">
                      <span className=" font-bold text-md">Email</span>
                      <input
                        className="w-full  mt-2 p-2 border border-blue-500 rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        name="email"
                      />
                    </div>

                    <div className="py-2">
                      <span className="mb-2 font-bold text-md">
                        Phone Number
                      </span>
                      <input
                        required
                        placeholder="Enter Your Phone Number"
                        name="Number"
                        className="w-full mt-2 p-2 border border-blue-500 rounded-lg placeholder:font-light placeholder:text-gray-500"
                      />
                    </div>
                    <div className="py-2">
                      <span className=" font-bold text-md">Adress</span>
                      <input
                        className="w-full  mt-2 p-2 border border-blue-500 rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="text"
                        required
                        placeholder="Enter Your Adress"
                        name="address"
                      />
                    </div>

                    <button className="w-full bg-blue-500 text-white p-2 mt-5 rounded-lg mb-2  hover:bg-white hover:text-blue-500 hover:border border-blue-500 focus:outline-none focus:shadow-outline-green">
                      Make Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* delivary form section start */}
      </div>
    </div>
  );
};

export default PricingId;
