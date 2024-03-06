
import {
  FaBiking,
  FaEdit,
  FaRegAddressCard,
  FaToolbox,
  FaUpload,
} from "react-icons/fa";

const Parcel = () => {
  return (
    <div className="">
      <div className="card-body flex items-center justify-center px-0 ">
        <div>
          <h5 className="text-[#ec3900] text-center mb-4 mt-5">
            {" "}
            --- HOW IT WORKS ---
          </h5>
          <h2 className="mb-10 card-title text-5xl font-bold lg:px-0 px-5">
            How We Deliver Your Parcel
          </h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:px-20 px-5">
          <div className="rounded shadow-xl hover:shadow-foreground p-5">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center">
                  <FaEdit className="bg-white p-5 text-center text-8xl text-[#ec3900] "></FaEdit>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-2xl  font-bold">
              Parcel Register
            </h2>
            <p className="text-center text-gray-500 mb-2">
              One of the key components of best logistics solutions industry
            </p>
          </div>

          <div className="bg-white rounded shadow-xl p-5 hover:shadow-foreground">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center    ">
                  <FaUpload className="bg-white p-5 text-center text-8xl text-[#ec3900] "></FaUpload>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-2xl  font-bold">
              Parcel Loading
            </h2>
            <p className="text-center text-gray-500 mb-2">
              Two of the key components of best logistics solutions industry
            </p>
          </div>

          <div className="bg-white rounded shadow-xl p-5 hover:shadow-foreground">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center    ">
                  <FaRegAddressCard className="bg-white p-5 text-center text-8xl text-[#ec3900] "></FaRegAddressCard>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-2xl  font-bold">
              Parcel In-transit
            </h2>
            <p className="text-center text-gray-500 mb-2">
              Three of the key components of best logistics solutions industy
            </p>
          </div>

          <div className="bg-white rounded shadow-xl p-5 hover:shadow-foreground">
            <div className="text-center rounded-full">
              <div className="mb-4 ">
                <span className="flex justify-center items-center    ">
                  <FaBiking className="bg-white p-5 text-center text-8xl text-[#ec3900] "></FaBiking>
                </span>
              </div>{" "}
            </div>

            <h2 className="mb-4 text-center  text-2xl  font-bold">
              Parcel Delivery
            </h2>
            <p className="text-center text-gray-500 mb-2">
              Four of the key components of best logistics solutions industy
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Parcel;