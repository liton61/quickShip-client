"use client";
import { useContext } from "react";
import { AuthContext } from "../auth/page";

const ProductReturn = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-10 lg:px-0  py-44">
        <div className="mr-[5rem]">
          <div className="py-5 ">
            <form>
              <div className="flex items-center justify-center">
                <div className="relative flex flex-col m-2 space-y-8 bg-blue-300 shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                  <div className="flex flex-col justify-center  md:p-6">
                    <span className="mb-3 text-4xl text-center text-blue-500 font-bold">
                      Product Return
                    </span>

                    {/* name and email */}
                    <div className="flex gap-2">
                      <div className="py-2 w-1/2">
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
                      <div className="py-2 w-1/2">
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
                    <div className="flex gap-2">
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">Product Id</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="number"
                          required
                          placeholder="Product Id"
                          name="productId"
                        />
                      </div>
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">Product Name</span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="text"
                          required
                          placeholder="Enter Your Product Name"
                          name="Product Name"
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
                          required
                          placeholder="Price"
                          name="price"
                        />
                      </div>
                      <div className="py-2 w-1/2">
                        <span className=" font-bold text-md">
                          Product Quantity
                        </span>
                        <input
                          className="w-full  mt-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                          type="number"
                          required
                          placeholder="Enter Product Quantity "
                          name="quantity"
                        />
                      </div>
                    </div>

                    <div className="flex gap-7">
                      <label className="form-control w-full max-w-xs">
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
                      <label className="form-control w-full max-w-xs">
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

                    <div className="flex justify-center mt-8">
                      <button className="btn btn-wide">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReturn;
