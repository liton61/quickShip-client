"use client"

import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {  FaArrowRight, FaShip, FaTruck } from "react-icons/fa";
import {   FaPeopleCarryBox, FaTrainSubway, } from "react-icons/fa6";
import { GiCargoCrate, GiCommercialAirplane } from "react-icons/gi";

const NewService = () => {

    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
            id: 1,
            name: "Road Freight Service",
            logo: "https://i.ibb.co/JxmLR2z/Untitled-design.png",
            image: "https://i.ibb.co/58Py329/m-b-actros-010.jpg",
            icon: <FaTruck className="text-6xl" />,
            description: "Road freight service is a mode of transporting various goods by road using trucks that can handle different loads and distances.",
        },
        {
            id: 2,
            name: "Sea Freight Service",
            logo: "https://i.ibb.co/HNQjgCv/Untitled-design-1.png",
            image: "https://i.ibb.co/cXzpnkP/front-view-bow-large-blue-600nw-1892071042.webp",
            icon: <FaShip className="text-6xl" />,
            description: "Sea freight service is shipping goods overseas by sea using cargo ships of different sizes and capacities.",
        },
        {
            id: 3,
            name: "Train Freight Service",
            logo: <FaTrainSubway className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/6mrwfWW/main-qimg.jpg",
            icon: <FaTrainSubway className="text-6xl" />,
            description: "Train freight service is transporting goods by rail using freight cars of different types and capacities.By rail using cars.",
        },
        {
            id: 4,
            name: "Cargo Freight Service",
            logo: <GiCargoCrate className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/7pNhMbY/01-06-16-small-13813.jpg",
            icon: <GiCargoCrate className="text-6xl" />,
            description: "Cargo Freight Service: Efficient global transport for goods via air, sea, and land, ensuring timely delivery, secure handling solutions.",
        },
        {
            id: 5,
            name: "Plane Freight Service",
            logo: <GiCommercialAirplane className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/7z3s0s5/HD-wallpaper-take-off-plane-sunset-view.jpg",
            icon: <GiCommercialAirplane className="text-6xl" />,
            description: "Plane Freight Service: Fast, reliable air transport for cargo, facilitating global trade with efficient logistics and secure handling.",
        },
        {
            id: 6,
            name: "Man Freight Service",
            logo: <FaPeopleCarryBox className="text-6xl text-blue-600" />,
            image: "https://i.ibb.co/rbW3FR9/Parcel-Delivery.jpg",
            icon: <FaPeopleCarryBox className="text-6xl " />,
            description: "Man Freight Service: Dedicated transportation solutions for heavy machinery and equipment, ensuring safe and timely delivery.",
        },


    ];

    const handleMouseEnter = (serviceId) => {
        setHoveredService(serviceId);
    };

    const handleMouseLeave = () => {
        setHoveredService(null);
    };

    return (
        <div className="bg-base-200">
            <SectionTitle header={"Our services"} miniHeader={"Our services"} />
            <div className=" m-auto flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:gap-7 p-2 xl:p-0">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="w-[370px] lg:w-[300px] xl:w-[370px] h-[440px] bg-cover bg-center relative shadow-2xl"
                            style={{ backgroundImage: `url('${service.image}')` }}
                            onMouseEnter={() => handleMouseEnter(service.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="p-6">
                                {/* Show service details by default */}
                                <div className={`${hoveredService === service.id ? "" : "hidden"}`}>
                                    <div className="flex flex-col justify-center items-center  py-12  text-center bg-blue-600 text-white w-full">
                                        {service.icon}
                                        <p className="text-2xl lg:text-lg xl:text-2xl font-bold">{service.name}</p>
                                    </div>
                                    <div className="py-8 lg:py-0 xl:py-8 bg-white px-4 text-center h-52">
                                        <p className="pb-4 lg:pb-1 xl:pb-4 text-justify overflow-hidden">{service.description}</p>
                                        <Link href={`/service`}>
                                            <button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600">
                                                Learn More <FaArrowRight />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                {/* Image and name shown when not hovered */}
                                <div className={`${hoveredService === service.id ? "hidden" : ""}`}>
                                    <div className="bg-white h-[140px] translate-y-64">
                                        <div className="flex justify-center items-center text-center p-4">
                                            <div className="absolute p-6 bg-white rounded-full">
                                                <div className="w-16 rounded-full">
                                                    {typeof service.logo === "string" ? (
                                                        <Image
                                                            height={200}
                                                            width={200}
                                                            alt="img"
                                                            className="h-full w-full"
                                                            src={service.logo}
                                                        />
                                                    ) : (
                                                        service.logo
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold pt-36 absolute">
                                                {service.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewService;
