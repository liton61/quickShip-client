"use client";
// import Image from "next/image";
import "./service.css";
// import { FaArrowRight } from "react-icons/fa";
import useServices from "@/components/hooks/useService";
import OurServices from "@/components/ui/OurServices";
import Parcel from "@/components/ui/Parcel";
// import NewService from "@/components/ui/NewService/NewService";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="bg-base-200">
      <div className="container mx-auto  px-5 lg:py-20 2xl:py-24">
      <Parcel></Parcel>
      <OurServices/>
      {/* <NewService/> */}
      </div>
      <OurServices/>
    </div>
  );
};

export default Services;
