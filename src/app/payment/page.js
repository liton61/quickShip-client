import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import React from "react";

// const stripePromise = loadStripe("");
const PaymentPage = () => {
  return (
    <div>
      <div className="bg-gray-100 py-10   flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-3 text-center">
            <h2 className="text-3xl py-10">
              <u>
                <b>Payment Now </b>
              </u>
            </h2>

            <div className="flex justify-center my-10">
              <div className="card w-[70%] flex justify-center card-side bg-base-100 shadow-xl">
                <figure>
                  <Image
                    width={400}
                    height={10}
                    src="https://i.ibb.co/MNpPN6d/payment.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body  ">
                  <div className=" card-title -mt-5 font-bold">name</div>
                  <div className="text-start mb-6">
                    <h3>
                      <b>Price</b> : $price
                    </h3>
                    <h3 className="mb-2 mt-1">
                      <b>Features</b> : advancedFeatures
                    </h3>
                    <p className="mb-8">Please Enter your card number :</p>
                    {/* <Elements stripe={stripePromise}>
              <CheckForm></CheckForm>
            </Elements> */}
                  </div>

                  <div className="card-actions ">
                    <button className="btn btn-primary">payemnt</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
