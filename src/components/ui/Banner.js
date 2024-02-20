"use client"
import Lottie from "lottie-react";
import React from "react";
import wShip from "../../../public/W ship.json";
import Link from "next/link";

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
              <p>
                QuickShip, the epitome of efficiency in the realm of international courier services, stands as a beacon for swift and reliable parcel deliveries across borders.
              </p>
              <div className="join">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item lg:w-96 md:w-96 w-36"
                      placeholder="Your tracking id..."
                    />
                  </div>
                </div>
                <div className="indicator">
                  <Link href={'/status'}>
                    <button className="btn rounded-l-none bg-blue-500 text-white">
                      Track Now
                    </button>
                  </Link>
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
