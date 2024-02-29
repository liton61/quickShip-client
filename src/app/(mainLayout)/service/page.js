"use client";
import Image from "next/image";
import "./service.css";
import { FaArrowRight } from "react-icons/fa";
import useServices from "@/components/hooks/useService";
import OurServices from "@/components/ui/OurServices";
import NewService from "@/components/ui/NewService/NewService";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="bg-base-200">
      <div className="container mx-auto  px-5 lg:py-20 2xl:py-24">
      <OurServices/>
      <NewService/>
        {/* <h2 className="text-center mb-8 text-4xl font-bold">Our Services</h2> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.map((services) => (
            <div
              key={services._id}
              className=" bg-white my-10  border relative cardOne"
            >
              <div className="imgbx ">
                <Image
                  className="w-full"
                  src={services.images}
                  width={200}
                  height={200}
                  alt="logo"
                />
              </div>
              <div className="content">
                <div className="details">
                  <h2 className="font-bold text-2xl  ">{services.title}</h2>
                  <div className="data">
                    <p>
                      This mode of transportation is known for its speed and
                      efficiency, making it ideal for time-sensitive shipments
                      or goods that need to travel long distances quickly
                    </p>
                  </div>
                  <div className="readMore mt-5">
                    <button className="btn bg-blue-500 text-white ">
                      Read More{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Services;
