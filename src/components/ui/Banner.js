"use client"
import Lottie from "lottie-react";
import { useRef, useState } from "react";
import wShip from "../../../public/W ship.json";
import ShowStatus from "./ShowStatus";
import toast from "react-hot-toast";
import { FaPaste } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Banner = () => {
  const inputRef = useRef(null);
  const [trackingId, setTrackingId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setTrackingId(e.target.value);
  };

  const handleStatus = () => {

    if (trackingId) {
      setModalOpen(true);

    } else {
      toast.error("Please enter a tracking ID.");
    }

  };

  const handlePaste = () => {
    navigator.clipboard.readText()
      .then(text => {
        setTrackingId(text);
      })
      .catch(error => {
        console.error('Failed to paste:', error);
      });
  };

  const handleClean = () => {
    inputRef.current.value = "";
  }

  return (
    <div className=" pt-20">
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/f9FDs29/bn.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className=" text-center text-neutral-content">
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
                      className="input input-bordered join-item text-slate-600 lg:w-80 md:w-80 w-44"
                      placeholder="Tracking id..."
                      value={trackingId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="indicator flex justify-center items-center">
                  <button className="absolute  text-red-300  mr-52" onClick={handleClean}>
                    <FaX className="text-sm" />
                  </button>
                  <button className="absolute text-gray-500 mr-36" onClick={handlePaste}>
                    <FaPaste />
                  </button>
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
        <dialog id="my_modal_1" className="modal glass" open>
          <div className="modal-box text-black">
            <h3 className="font-bold text-xl text-center mb-3">My Parcel Status:</h3>
            <div className="py-4 w-full">
              {/* Pass the trackingId to ShowStatus */}
              <ShowStatus trackingId={trackingId} />
            </div>
            <div className="modal-action glass">
              <button className="btn  btn-black" onClick={() => setModalOpen(false)}>Close</button>
            </div>
          </div>
        </dialog>

      )}
    </div>
  );
};

export default Banner;

