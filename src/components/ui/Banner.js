"use client"
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import wShip from "../../../public/W ship.json";
import ShowStatus from "./ShowStatus";
import toast from "react-hot-toast";

const Banner = () => {
  const inputRef = useRef(null);
  const [trackingId, setTrackingId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setTrackingId(e.target.value);
  };

  const handleStatus = () => {
    inputRef.current.value = "";
    if (trackingId) {
      setModalOpen(true);

    } else {
      toast.error("Please enter a tracking ID.");
    }

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
              <div className="join">
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
                  <button className="btn rounded-l-none bg-blue-500 text-white" onClick={handleStatus}>Track Now</button>
                </div>
              </div>
            </div>
            <div className="card w-full max-w-xl">
              <div className="col-span-4">
                <Lottie loop={true} animationData={wShip}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for showing parcel status */}
      {modalOpen && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box text-black">
            <h3 className="font-bold text-lg">Your Parcel Status</h3>
            <div className="py-4 w-full">
              {/* Pass the trackingId to ShowStatus */}
              <ShowStatus trackingId={trackingId} />
            </div>
            <div className="modal-action">
              <button className="btn btn-outline btn-black" onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div>
        </dialog>

      )}
    </div>
  );
};

export default Banner;

