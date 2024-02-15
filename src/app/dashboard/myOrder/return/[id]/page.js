/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useOrder from "@/components/hooks/useOrder";
import usePublicAxios from "@/components/hooks/usePublicAxios";


import React from "react";
import Swal from "sweetalert2";

const returnPage = ({ params }) => {
  const axiosPublic = usePublicAxios();
  const [order] = useOrder();

  const productReturn = params.id;

  const newOrder = order.find((order) => order._id === productReturn);

  const handleReturnOrder = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // const phone = form.phone.value;
    const price = form.price.value;
    const weight = form.weight.value;
    // const time = form.time.value;

    const returnOrder = {
      name,
      email,
      phone: newOrder.phone,
      price,
      weight,
    };
    console.log(returnOrder);

    const res = await axiosPublic.post(`/return`, returnOrder);

    console.log(res.data);
    if (res.data.acknowledged === true) {
      Swal.fire({
        title: "success",
        text: "Return Request Submit Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto lg:py-10">
      <div className="">
        <div className="">
          <form onSubmit={handleReturnOrder}>
            <div className="flex items-center justify-center ">
              <div className="relative flex flex-col m-2 space-y-8 bg-base-300 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                <div className="flex flex-col justify-center  md:p-6 ">
                  <span className=" text-xl md:text-2xl lg:text-4xl text-center text-blue-500 font-bold">
                    Product Return
                  </span>

                  {/* name and email */}
                  <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
                    <div className="lg:py-2 ">
                      <span className="font-bold text-md">Name</span>
                      <input
                        className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="name"
                        defaultValue={newOrder?.name}
                        required
                        placeholder="Enter Your Name"
                        name="name"
                      />
                    </div>
                    <div className="lg:py-2 ">
                      <span className=" font-bold text-md">Email</span>
                      <input
                        className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="email"
                        required
                        defaultValue={newOrder?.email}
                        placeholder="Enter Your email"
                        name="email"
                      />
                    </div>
                  </div>
                  {/* date and phone */}
                  <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
                    <div className="lg:py-2 ">
                      <span className=" font-bold text-md">Product Id</span>
                      <input
                        className="w-full  my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="text"
                        required
                        defaultValue={params?.id}
                        placeholder="Product Id"
                        name="productId"
                      />
                    </div>
                    <div className="lg:py-2 ">
                      <span className=" font-bold text-md">Product Name</span>
                      <input
                        className="w-full  my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="text"
                        required
                        placeholder="Enter Your Product Name"
                        name="Product Name"
                      />
                    </div>
                  </div>
                  {/* Price (Tk) and weight */}
                  <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
                    <div className="py-2 ">
                      <span className=" font-bold text-md">Price (Tk)</span>
                      <input
                        className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="number"
                        required
                        defaultValue={newOrder?.productPrice}
                        placeholder="Price"
                        name="price"
                      />
                    </div>
                    <div className="lg:py-2 ">
                      <span className=" font-bold text-md">
                        Product Quantity
                      </span>
                      <input
                        className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                        type="number"
                        required
                        defaultValue={newOrder?.productWeight}
                        placeholder="Enter Product Quantity "
                        name="weight"
                      />
                    </div>
                  </div>

                  {/* Reason and payment */}
                  <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="font-bold text-md">
                          Select A Reason
                        </span>
                      </div>
                      <select className="select select-bordered w-full">
                        <option disabled selected>
                          Select Reason
                        </option>
                        <option>
                          Component or accessory is missing from the Item
                        </option>
                        <option>Item has missing freeble</option>
                        <option>
                          Item does not mathch description or picture
                        </option>
                        <option>I did not order this size</option>
                        <option>The item fake or is a couterfeit Item</option>
                        <option>I received the wrong Item</option>
                        <option>Item does not fit me</option>
                        <option>
                          Item is damaged/broken/has dent or scratches
                        </option>
                      </select>
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="font-bold text-md">
                          Select Payment Option
                        </span>
                      </div>
                      <select className="select select-bordered">
                        <option disabled selected>
                          Select Payment
                        </option>
                        <option>Bkash</option>
                        <option>Nogod</option>
                        <option>Master Card</option>
                        <option>VISA</option>
                        <option>Payoneer</option>
                      </select>
                      <div className="label"></div>
                    </label>
                  </div>

                  {/* Comments */}
                  <label className="form-control p-2 lg:px-5">
                    <div className="label">
                      <span className="label-text font-bold">Comments</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Comments Here...."
                    ></textarea>
                    <div className="label"></div>
                  </label>

                  <div className="flex justify-center  ">
                    <label className="">
                      <input
                        type="submit"
                        value="Return Order"
                        className="btn btn-block mt-4 text-white bg-blue-500"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default returnPage;
