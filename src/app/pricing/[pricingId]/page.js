"use client";
import { AuthContext } from "@/app/auth/page";
import { getPrice } from "@/components/utils/getAllPricing";
import Link from "next/link";
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";

const PricingId = ({ params }) => {
  const { pricingId } = params;
  const price = getPrice(pricingId);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="grid lg:grid-cols-2 items-center justify-center   grid-cols-1 lg:w-3/4 mx-auto">
        {/* delivery services part start */}
        <div className=" flex justify-center">
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
        <div className="py-20">
          <div className="bg-white shadow-2xl lg:mx-0 mx-5">
            <form className="">
              <div className="flex items-center justify-center  ">
                <div className="relative flex flex-col m-2 space-y-8  rounded-2xl md:flex-row md:space-y-0">
                  <div className="flex flex-col justify-center  md:p-6">
                    <span className="mb-3 text-3xl text-center text-blue-500 font-bold">
                      Please, fill up the form !
                    </span>

                    {/* name and email */}
                    <div className="lg:flex md:flex gap-2">
                      <div className="p-2">
                        <span className=" font-bold text-md">Name</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="name"
                          required
                          placeholder="Enter Your Name"
                          defaultValue={user?.displayName}
                          name="name"
                        />
                      </div>
                      <div className="p-2">
                        <span className=" font-bold text-md">Email</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="email"
                          required
                          defaultValue={user?.email}
                          placeholder="Enter Your email"
                          name="email"
                        />
                      </div>
                    </div>
                    {/* date and phone */}
                    <div className="lg:flex md:flex gap-2">
                      <div className="p-2">
                        <span className=" font-bold text-md">
                          Delivery Date
                        </span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="date"
                          required
                          name="date"
                        />
                      </div>
                      <div className="p-2">
                        <span className=" font-bold text-md">Phone</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="text"
                          required
                          placeholder="Enter Your Phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    {/* Price (Tk) and weight */}
                    <div className="lg:flex md:flex gap-2">
                      <div className="p-2">
                        <span className=" font-bold text-md">Price (Tk)</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="number"
                          required
                          placeholder="Price"
                          name="price"
                        />
                      </div>
                      <div className="p-2">
                        <span className=" font-bold text-md">
                          Parcel Weight (kg)
                        </span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="number"
                          required
                          placeholder="Enter Parcel Weight "
                          name="weight"
                        />
                      </div>
                    </div>
                    <div className="p-2 ">
                      <span className=" font-bold text-md">
                        Parcel Delivery Address
                      </span>
                      <textarea
                        className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="number"
                        required
                        placeholder="Enter Parcel Delivery Address:"
                        name="price"
                      />
                    </div>

                    <Link href="/payment">
                      <button className="w-full bg-blue-500 text-white p-2 mt-5 rounded-lg mb-2  hover:bg-white hover:text-blue-500 hover:border border-blue-500 focus:outline-none focus:shadow-outline-green">
                        Make Order
                      </button>
                    </Link>
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
