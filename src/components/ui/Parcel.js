import React from "react";
import {
  FaArrowRight,
  FaBiking,
  FaEdit,
  FaRegAddressCard,
  FaToolbox,
} from "react-icons/fa";

const Parcel = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/Q9p7dfG/working-warehouse-scaled.jpg)] bg-center bg-no-repeat bg-cover py-10">
      <div className="card-body flex items-center justify-center px-0">
        <div>
          <h5 className="text-[#ec3900] text-center mb-4 mt-5">
            {" "}
            --- HOW IT WORKS ---
          </h5>
          <h2 className="mb-10 card-title text-5xl font-bold text-white lg:px-0 px-5">
            How We Deliver Your Parcel
          </h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:px-0 px-5">
          <div className="border p-5">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center   text-white  ">
                  <FaEdit className="bg-white p-5 text-center text-7xl rounded-lg  text-[#ec3900] "></FaEdit>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-3xl  font-bold text-white">
              Parcel Register
            </h2>
            <p className="text-center text-gray-500 mb-2">
              One of the key components of best logistics solutions industry
            </p>
            <p className="flex items-center justify-center gap-2 text-white">
              Learn More{" "}
              <span>
                <FaArrowRight />
              </span>
            </p>
          </div>

          <div className="border p-5">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center   text-white  ">
                  <FaToolbox className="bg-white p-5 text-center text-7xl rounded-lg  text-[#ec3900] "></FaToolbox>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-3xl  font-bold text-white">
              Parcel Loading
            </h2>
            <p className="text-center text-gray-500 mb-2">
              One of the key components of best logistics solutions industry
            </p>
            <p className="flex items-center justify-center gap-2 text-white">
              Learn More{" "}
              <span>
                <FaArrowRight />
              </span>
            </p>
          </div>

          <div className="border p-5">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center   text-white  ">
                  <FaRegAddressCard className="bg-white p-5 text-center text-7xl rounded-lg  text-[#ec3900] "></FaRegAddressCard>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-3xl  font-bold text-white">
              Parcel In-transit
            </h2>
            <p className="text-center text-gray-500 mb-2">
              One of the key components of best logistics solutions industy
            </p>
            <p className="flex items-center justify-center gap-2 text-white">
              Learn More{" "}
              <span>
                <FaArrowRight />
              </span>
            </p>
          </div>

          <div className="border p-5">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center   text-white  ">
                  <FaBiking className="bg-white p-5 text-center text-7xl rounded-lg  text-[#ec3900] "></FaBiking>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-3xl  font-bold text-white">
              Parcel Delivery
            </h2>
            <p className="text-center text-gray-500 mb-2">
              One of the key components of best logistics solutions industy
            </p>
            <p className="flex items-center justify-center gap-2 text-white">
              Learn More{" "}
              <span>
                <FaArrowRight />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;