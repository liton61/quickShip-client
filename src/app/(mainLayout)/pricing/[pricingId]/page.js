"use client";
import useAuth from "../../../../components/hooks/useAuth";
import usePublicAxios from "../../../../components/hooks/usePublicAxios";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import usePricing from "../../../../components/hooks/usePricing";

const PricingId = ({ params }) => {
  const { pricingId } = params;
  const [pricing, refetch] = usePricing()

  const findPrice = pricing?.find((item) => item?._id === pricingId)
  // console.log(findPrice);


  const { user } = useAuth();
  const [deliveryDate, setDeliveryDate] = useState("");
  const [phone, setPhone] = useState("");
  const [productWeight, setProductWeight] = useState(0);
  const [area, setArea] = useState("");


  const router = useRouter();

  const publicAxios = usePublicAxios();

  const addOrder = {
    name: user?.displayName,
    email: user?.email,
    deliveryDate,
    phone,
    productPrice: findPrice?.price,
    productWeight,
    area,
    status: "pending",
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const res = await publicAxios.post("/order", addOrder);
    toast.success("Successfully Order");
    refetch();
    router.push("/payment");
  };

  return (
    <div className="hero min-h-screen bg-base-200 pt-24">
      <div className="hero-content flex-col lg:flex-row">
        {/* delivery services part start */}
        <div className="lg:pr-12 ">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 mb-6">
              {" "}
              Delivery Service{" "}
            </p>
            <p className="text-2xl font-bold text-blue-500 mb-6">
              {" "}
              {/* {price.level} */}
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
                8:00 - 22:00 Every day
              </li>
            </ul>
            {/* <div className="p-4">
              <button className="w-full font-bold bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 hover:border border-blue-500 focus:outline-none focus:shadow-outline-green ">
                Read more
              </button>
            </div> */}
          </div>
        </div>
        {/* delivery services part end */}

        {/* delivary form section start */}
        <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">

          <div >
            <form onSubmit={handleOrder}>
              <div className="flex items-center justify-center">
                <div >
                  <div className="flex flex-col justify-center p-2 md:p-6">
                    <span className="mb-3 text-4xl text-center text-blue-500 font-bold">
                      Please, fill delivery <br /> form
                    </span>

                    {/* name and email */}
                    <div className="flex gap-2">
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">Name</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="name"
                          placeholder="Enter Your Name"
                          defaultValue={user?.displayName}
                          disabled
                          name="name"
                        />
                      </div>
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">Email</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="email"
                          defaultValue={user?.email}
                          placeholder="Enter Your email"
                          name="email"
                          disabled
                        />
                      </div>
                    </div>
                    {/* date and phone */}
                    <div className="flex gap-2">
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">
                          Delivery Date
                        </span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="date"
                          onBlur={(e) => setDeliveryDate(e.target.value)}
                          required
                          name="date"
                        />
                      </div>
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">Phone</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="text"
                          onBlur={(e) => setPhone(e.target.value)}
                          required
                          placeholder="Enter Your Phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    {/* Price (Tk) and weight */}
                    <div className="flex gap-2">
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">Price (Tk)</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="number"
                          placeholder="Price"
                          name="price"
                          defaultValue={findPrice?.price}
                          disabled
                        />
                      </div>
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">
                          Parcel Weight (kg)
                        </span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="number"
                          onBlur={(e) => setProductWeight(e.target.value)}
                          required
                          placeholder="Enter Parcel Weight "
                          name="weight"
                        />
                      </div>
                    </div>
                    <div className="py-2 ">
                      <span className=" font-bold text-md">
                        Parcel Delivery Address
                      </span>
                      <textarea
                        className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="number"
                        onBlur={(e) => setArea(e.target.value)}
                        required
                        placeholder="Enter Parcel Delivery Address:"
                        name="price"
                      />
                    </div>
                    <div className="flex justify-center py-5">
                      <button
                        type="submit"
                        className="font-bold py-2 px-6 rounded border border-blue-700 hover:bg-blue-600"
                      >
                        Make Order
                      </button>
                    </div>
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
