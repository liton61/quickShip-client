"use client";
import Lottie from "lottie-react";
import React from "react";
import wShip from "../../../public/W ship.json";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/f9FDs29/bn.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-3xl lg:text-7xl font-bold ">
                Reliable Service <br />
                Every Time
              </h1>
              <p className="">
                Nullam ac aliquam purus. Donec tempor, metus sed porttitor
                posuere, elit sapien rutrum elit, eget tincidunt nisl tortor nec
                metus. Donec tempor rhoncus convallis.
              </p>
              <div className="join">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item lg:w-96 md:w-96 w-48"
                      placeholder="Your tracking id..."
                    />
                  </div>
                </div>
                <div className="indicator">
                  <button className="btn rounded-l-none bg-blue-500 text-white">
                    Track Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card  w-full max-w-xl  ">
              <div className="col-span-4">
                <Lottie loop={true} animationData={wShip}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
