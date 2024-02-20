/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import useAuth from "../../../../../components/hooks/useAuth";
import useOrder from "../../../../../components/hooks/useOrder";
import usePublicAxios from "../../../../../components/hooks/usePublicAxios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const returnPage = ({ params }) => {
  const [productName, setProductName] = useState("")
  const [productReason, setProductReason] = useState("")
  const [productPayment, setProductPayment] = useState("")
  const [productComment, setProductComment] = useState("")

  const { user } = useAuth()
  const axiosPublic = usePublicAxios();
  const [order] = useOrder();

  // const [returnProduct] = useReturn()

  const newOrder = order.find((order) => order._id === params.id);
  const returnOrder = {
    name: user?.displayName,
    email: user?.email,
    productId: newOrder?._id,
    productName,
    productPrice: newOrder?.productPrice,
    productWeight: newOrder?.productWeight,
    productReason,
    productPayment,
    productComment
  };


  const handleReturnOrder = async (event) => {
    event.preventDefault();

    const res = await axiosPublic.post(`/return`, returnOrder);


    if (res.data.acknowledged === true) {
      toast.success("Return Request Submit Successfully")
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
                        disabled
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
                        disabled
                      />
                    </div>
                  </div>
                  {/* Product Id */}
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
                        disabled
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
                        onBlur={(e) => setProductName(e.target.value)}
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
                        disabled
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
                        disabled
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
                      <select select onBlur={
                        (e) => setProductReason(e.target.value)
                      }
                        className="select select-bordered w-full" >
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
                      <select select onBlur={
                        (e) => setProductPayment(e.target.value)
                      }
                        className="select select-bordered" >
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
                      onBlur={(e) => setProductComment(e.target.value)}
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
