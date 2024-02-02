"use client";

import useCalculator from "@/components/hooks/useCalculator";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BiReset } from "react-icons/bi";

const Calculator = () => {
  const formRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [productWeight, setProductWeight] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [pickupArea, setPickupArea] = useState("");
  const [deliveryArea, setDeliveryArea] = useState("");

  const publicAxios = usePublicAxios();

  const [calculators, refetch] = useCalculator();

  const addCalculator = {
    productWeight,
    sellingPrice,
    pickupArea,
    deliveryArea,
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddCalculator = async (e) => {
    e.preventDefault();
    const res = await publicAxios.post("/calculator", addCalculator);
    toast.success("Successfully Calculator");
    console.log(res.data);
    formRef.current.reset();

    refetch();
  };

  let mostRecentData = null;
  let mostRecentTime = 0;

  calculators.find((item) => {
    if (item.time) {
      const currentTime = new Date(item.time).getTime();
      if (currentTime > mostRecentTime) {
        mostRecentTime = currentTime;
        mostRecentData = item;
      }
    }
  });

  const deliveryCharges = 99 * parseFloat(mostRecentData?.productWeight);
  const codCharge = 0.44;

  const totalCharges =
    parseFloat(mostRecentData?.sellingPrice) + deliveryCharges + codCharge;

  return (
    <div className="">
      <form ref={formRef} className="card-body" onSubmit={handleAddCalculator}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-2/3 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Product weight<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              onBlur={(e) => setProductWeight(e.target.value)}
              type="number"
              name="title"
              placeholder="Enter the weight of the product"
              className="input bg-black text-white input-bordered placeholder:text-xs"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Selling price of the product
                <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              onBlur={(e) => setSellingPrice(e.target.value)}
              type="number"
              name="title"
              placeholder="Enter the Selling price of the product"
              className="input bg-black text-white input-bordered placeholder:text-xs"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Pick-up area<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              onBlur={(e) => setPickupArea(e.target.value)}
              type="text"
              name="title"
              placeholder="Name of Pick-up area"
              className="input bg-black text-white input-bordered placeholder:text-xs"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Delivery area<span className="text-red-700">*</span>
              </span>
            </label>
            <input
              onBlur={(e) => setDeliveryArea(e.target.value)}
              type="text"
              name="title"
              placeholder="Name of delivery area"
              className="input bg-black text-white input-bordered placeholder:text-xs"
              required
            />
          </div>
        </div>
        <div className="flex justify-center py-5">
          <button
            button
            type="submit"
            className="text-white font-bold py-2 px-6 rounded border border-blue-700 hover:bg-blue-600"
            onClick={openModal}
          >
            See delivery charges
          </button>

          {isOpen &&
            productWeight &&
            sellingPrice &&
            pickupArea &&
            deliveryArea && (
              <dialog
                dialog
                className="modal modal-bottom sm:modal-middle"
                open
              >
                <div className="modal-box bg-black text-white">
                  <h2 className="text-2xl font-bold text-center mb-6">
                    Delivery Calculator Details
                  </h2>
                  <div className="bg-[#0E0D21] py-4 px-5 text-center rounded-t-md shadow-md space-y-3">
                    <div className="flex justify-center">
                      <p className="text-sm font-normal text-blue-200">
                        Product weight :{" "}
                        <span className="text-md text-white font-bold ">
                          {" "}
                          {mostRecentData?.productWeight}kg
                        </span>
                      </p>

                      <p className="  text-sm font-normal text-blue-200">
                        Selling price :{" "}
                        <span className="text-md text-white font-bold ">
                          {" "}
                          {mostRecentData?.sellingPrice}Tk
                        </span>
                      </p>
                    </div>

                    <p className="  text-sm font-normal text-blue-200">
                      Pick-up area :{" "}
                      <span className="text-md text-white font-bold ">
                        {" "}
                        {mostRecentData?.pickupArea}
                      </span>
                    </p>

                    <p className="  text-sm font-normal text-blue-200">
                      Delivery area :{" "}
                      <span className="text-md text-white font-bold ">
                        {" "}
                        {mostRecentData?.deliveryArea}
                      </span>
                    </p>
                  </div>

                  <div className="bg-[#010313] py-5 px-5 rounded-b-md shadow-md">
                    <div className="flex justify-between items-center">
                      <h2 className="text-3xl font-bold">Tk.{totalCharges}</h2>
                      <button
                        onClick={closeModal}
                        className="text-white flex items-center font-bold text-sm py-1 px-3 rounded border border-purple-700 hover:bg-purple-950"
                      >
                        <BiReset></BiReset>{" "}
                        <span className="ml-1 text-xs">Reset</span>
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 py-4">
                      Payable Price:{" "}
                    </p>

                    <div className="flex justify-between items-center">
                      <h2 className="text-sm font-normal text-blue-200">
                        Delivery charges
                      </h2>
                      <h4 className="text-lg text-white font-bold">
                        {deliveryCharges}Tk
                      </h4>
                    </div>

                    <div div className="flex justify-between items-center">
                      <h2 className="text-sm font-normal text-blue-200">
                        COD Charge (1%)
                      </h2>
                      <h4 className="text-lg text-white font-bold">
                        {codCharge}Tk
                      </h4>
                    </div>
                  </div>
                </div>
                <form
                  method="dialog"
                  className="modal-backdrop"
                  onClick={closeModal}
                >
                  <button onClick={closeModal}>Close</button>
                </form>
              </dialog>
            )}
        </div>
      </form>
    </div>
  );
};

export default Calculator;
