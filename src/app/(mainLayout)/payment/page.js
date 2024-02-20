"use client";
import useOrder from "../../../components/hooks/useOrder";
import CheckoutForm from "../../../components/ui/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import React from "react";

const PaymentPage = () => {
  const stripePromise = loadStripe(
    "pk_test_51OEHKpItrEdLuT7QfJHV2vlSDSSTfGMzIXNJB08KN1pKingZdzESWEK2XOcaPf3CZ9NULcS3IiaGMzijEfAVz70o00WYZHsRGz"
  );

  const [order] = useOrder();
  // console.log(order);
  let mostRecentData = null;
  let mostRecentTime = 0;

  order.find((item) => {
    if (item.time) {
      const currentTime = new Date(item.time).getTime();
      if (currentTime > mostRecentTime) {
        mostRecentTime = currentTime;
        mostRecentData = item;
      }
    }
  });

  console.log(mostRecentData);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#0E0D21]">
      <div className="modal-box text-white mt-10 bg-black">
        <h2 className="text-2xl font-bold text-center mb-6">Payment Now</h2>
        <div className="bg-[#0E0D21] flex items-center gap-4 py-4 px-5 rounded-t-md shadow-md space-y-3">
          <div>
            <Image
              width={130}
              height={110}
              src="https://i.ibb.co/MNpPN6d/payment.jpg"
              alt="Album"
            />
          </div>
          <div className="space-y-1">
            <p className="  text-sm font-normal text-blue-200">
              {mostRecentData?.name}
            </p>

            <p className="  text-sm font-normal text-blue-200">
              {mostRecentData?.deliveryDate}
            </p>
            <p className="  text-sm font-normal text-blue-200">
              {mostRecentData?.area}
            </p>

            <p className="  text-sm font-normal text-blue-200">
              Product Price :{" "}
              <span className="text-md text-white font-bold ">
                {mostRecentData?.productPrice}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-[#010313] py-5 rounded-b-md shadow-md">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              order={mostRecentData}
              amount={mostRecentData?.productPrice}
            ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
