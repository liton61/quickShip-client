"use client"
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import wShip from "../../../public/W ship.json";
import Link from "next/link";


const Banner = () => {
  const inputRef = useRef(null);
  const [trackingId, setTrackingId] = useState("");

  const handleInputChange = (e) => {
    setTrackingId(e.target.value);

  };

  const handleStatus = () => {
    console.log(trackingId);
    setTrackingId("");
    inputRef.current.value = "";
  };

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
              <form className="join">
                <div>
                  <div>
                    <input
                      ref={inputRef}
                      className="input input-bordered join-item text-slate-600 lg:w-96 md:w-96 w-32"
                      placeholder="Your tracking id...."
                      value={trackingId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="indicator">
                  <button onClick={handleStatus} className="btn rounded-l-none bg-blue-500 text-white">
                  <Link href={`/status/${trackingId}`}>
                    Track Now
                  </Link>
                  </button>
                </div>
              </form>
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
