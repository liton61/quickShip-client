import Image from "next/image";
import { FaCheck } from "react-icons/fa";


const About = () => {
    return (
        <div>
      <div className=" mb-5 mx-auto max-w-screen-xl  ">
        <div className="flex pb-8 mt-16 gap-10 flex-col  lg:flex-row">
          <div className="lg:w-1/2 space-y-5 px-4">
            <h3 className="text-xl text-blue-500 font-bold">About Us</h3>
            <h1 className="text-3xl font-bold">
              World’s Leading Contract Logistics Provider.
            </h1>
            <p className="py-3">
            QuickShip, the epitome of efficiency in the realm of international courier services, stands as a beacon for swift and reliable parcel deliveries across borders.
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-blue-500"></FaCheck>
              Global Leaders creation and organization
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-blue-500"></FaCheck>
              Due dates, labels, and priorities
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-blue-500"></FaCheck>
              People Experience and sub-task management
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-blue-500"></FaCheck>
              Project and quick-ship management
            </p>
            <p className="flex items-center gap-2">
              <FaCheck className="text-blue-500"></FaCheck>
              Brilliant Services and all user management
            </p>
            <button className="btn btn-info bg-blue-500 text-white">
              Read More...
            </button>
          </div>
          <div className="lg:w-1/2 md:mb-6 relative mt-20">
            {/* <Image
              className="rounded-sm  lg:ml-14"
              src="https://i.ibb.co/X2Lf7QM/Quickship2.png"
              alt="images"
              width={500}
              height={20}
            ></Image> */}

            <div className="stats bg-blue-500 lg:ml-[45px]  stats-vertical lg:stats-horizontal w-5/6 absolute -mt-16 rounded-none">
              <div className="stat place-items-center">
                <div className="stat-value p-4 text-white">
                  31{" "}
                  <span className="text-xl">
                    + Years
                    <br /> Experience
                  </span>
                </div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-value p-4 text-white">
                  31k{" "}
                  <span className="text-xl">
                    Satisfied
                    <br />
                    Clients
                  </span>
                </div>
              </div>
            </div>

            <Image
              className="rounded-sm "
              src="https://i.ibb.co/vdpVCsN/about-img-2-1.jpg"
              alt="images"
              width={600}
              height={20}
            ></Image>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;