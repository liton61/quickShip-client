"use client"


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { FaPeopleCarryBox, FaShip, FaTrainSubway, FaTruck } from "react-icons/fa6";
import { GiCargoCrate, GiCommercialAirplane } from "react-icons/gi";


const NewService = () => {
    // State variable to track hover state
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);
    const [isHovering5, setIsHovering5] = useState(false);
    const [isHovering6, setIsHovering6] = useState(false);




    return (
        <>
            <div className="bg-base-200">
                <h1 className="text-center text-5xl font-bold py-10">Our Services</h1>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:px-20 px-5">

                    {/* 1 */}
                    <div
                        className="h-[440px] bg-cover bg-center relative"
                        style={{ backgroundImage: `url('https://i.ibb.co/58Py329/m-b-actros-010.jpg')` }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className="p-6">
                            {/* Second part (hidden by default) */}

                            <div className={`${isHovering ? "" : "hidden"} flex flex-col justify-center items-center text-center`}>
                                <div className="flex flex-col justify-center items-center py-10 text-center  bg-blue-600 text-white w-full">
                                    <FaTruck className="text-6xl" />
                                    <p className="text-2xl font-bold">Road Freight <br />Service</p>
                                </div>
                                <div className=" py-6 bg-white  px-4 space-y-3">
                                    <p className="text-justify">
                                        Road freight service is a mode of transporting various goods by road using trucks that can handle different loads and distances.</p>
                                    <Link href={`/service`}><button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600 mt-5">
                                        Learn More <FaArrowRight />
                                    </button></Link>
                                </div>
                            </div>
                            {/* First part */}
                            <div
                                className={`bg-white h-[140px] translate-y-64  ${isHovering ? "opacity-0" : ""
                                    }`}
                            >
                                <div className="flex justify-center items-center text-center p-4">
                                    <div className="absolute p-6 bg-white rounded-full">
                                        <div className="w-16 rounded-full">
                                            <Image
                                                height={200}
                                                width={200}
                                                alt="img"
                                                className="h-full w-full"
                                                src="https://i.ibb.co/JxmLR2z/Untitled-design.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold pt-36 absolute">
                                        Road Freight <br /> Service
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    {/* 2 */}
                    <div
                        className="h-[440px] bg-cover bg-center relative"
                        style={{ backgroundImage: `url('https://i.ibb.co/cXzpnkP/front-view-bow-large-blue-600nw-1892071042.webp')` }}
                        onMouseEnter={() => setIsHovering2(true)}
                        onMouseLeave={() => setIsHovering2(false)}
                    >
                        <div className="p-6">
                            {/* Second part (hidden by default) */}

                            <div className={`${isHovering2 ? "" : "hidden"} flex flex-col justify-center items-center text-center`}>
                                <div className="flex flex-col justify-center items-center py-10 text-center  bg-blue-600 text-white w-full">
                                    <FaShip className="text-6xl" />
                                    <p className="text-2xl font-bold">Sea Freight <br />Service</p>
                                </div>
                                <div className=" py-6 bg-white  px-4 space-y-2">
                                    <p className="text-justify">
                                        Sea freight service is shipping goods overseas by sea using cargo ships of different sizes and capacities.By sea using cargo ships.
                                    </p>
                                    <Link href={`/service`}><button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600 mt-5">
                                        Learn More <FaArrowRight />
                                    </button></Link>
                                </div>
                            </div>
                            {/* First part */}
                            <div
                                className={`bg-white h-[140px] translate-y-64 ${isHovering2 ? "opacity-0" : ""
                                    }`}
                            >
                                <div className="flex justify-center items-center text-center p-4">
                                    <div className="absolute p-6 bg-white rounded-full">
                                        <div className="w-16 rounded-full">
                                            <Image
                                                height={100}
                                                width={100}
                                                alt="img"
                                                className="h-full w-full"
                                                src="https://i.ibb.co/HNQjgCv/Untitled-design-1.png "
                                            />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold pt-36 absolute">
                                        Sea Freight <br /> Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div
                        className="h-[440px] bg-cover bg-center relative"
                        style={{ backgroundImage: `url('https://i.ibb.co/6mrwfWW/main-qimg.jpg')` }}
                        onMouseEnter={() => setIsHovering3(true)}
                        onMouseLeave={() => setIsHovering3(false)}
                    >
                        <div className="p-6">
                            {/* Second part (hidden by default) */}

                            <div className={`${isHovering3 ? "" : "hidden"} flex flex-col justify-center items-center text-center`}>
                                <div className="flex flex-col justify-center items-center py-10 text-center  bg-blue-600 text-white w-full">
                                    <FaTrainSubway className="text-6xl" />
                                    <p className="text-2xl font-bold">Train Freight <br />Service</p>
                                </div>
                                <div className=" py-6 bg-white  px-4 space-y-2">
                                    <p className="text-justify">
                                        Train freight service is transporting goods by rail using freight cars of different types and capacities.By rail using freight cars.
                                    </p>
                                    <Link href={`/service`}><button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600 mt-5">
                                        Learn More <FaArrowRight />
                                    </button></Link>
                                </div>
                            </div>
                            {/* First part */}
                            <div
                                className={`bg-white h-[140px] translate-y-64 ${isHovering3 ? "opacity-0" : ""
                                    }`}
                            >
                                <div className="flex justify-center items-center text-center p-4">
                                    <div className="absolute p-6 bg-white rounded-full">
                                        <div className=" rounded-full">
                                            <FaTrainSubway className="text-6xl text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold pt-36 absolute">
                                        Train Freight <br /> Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* =====4==== */}
                    <div
                        className="h-[440px] bg-cover bg-center relative"
                        style={{ backgroundImage: `url('https://i.ibb.co/7pNhMbY/01-06-16-small-13813.jpg')` }}
                        onMouseEnter={() => setIsHovering4(true)}
                        onMouseLeave={() => setIsHovering4(false)}
                    >
                        <div className="p-6">
                            {/* Second part (hidden by default) */}

                            <div className={`${isHovering4 ? "" : "hidden"} flex flex-col justify-center items-center text-center`}>
                                <div className="flex flex-col justify-center items-center py-10 text-center  bg-blue-600 text-white w-full">
                                    <GiCargoCrate className="text-6xl" />
                                    <p className="text-2xl font-bold">Cargo Freight <br />Service</p>
                                </div>
                                <div className=" py-6 bg-white  px-4 space-y-2">
                                    <p className="text-justify">
                                        Cargo Freight Service: Efficient global transport for goods via air, sea, and land, ensuring timely delivery, secure handling, and personalized solutions.
                                    </p>
                                    <Link href={`/service`}><button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600 mt-5">
                                        Learn More <FaArrowRight />
                                    </button></Link>
                                </div>
                            </div>
                            {/* First part */}
                            <div
                                className={`bg-white h-[140px] translate-y-64 ${isHovering4 ? "opacity-0" : ""
                                    }`}
                            >
                                <div className="flex justify-center items-center text-center p-4">
                                    <div className="absolute p-6 bg-white rounded-full">
                                        <div className=" rounded-full">
                                            <GiCargoCrate className="text-6xl text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold pt-36 absolute">
                                        Cargo Freight <br /> Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div
                        className="h-[440px] bg-cover bg-center relative"
                        style={{ backgroundImage: `url('https://i.ibb.co/7z3s0s5/HD-wallpaper-take-off-plane-sunset-view.jpg')` }}
                        onMouseEnter={() => setIsHovering5(true)}
                        onMouseLeave={() => setIsHovering5(false)}
                    >
                        <div className="p-6">
                            {/* Second part (hidden by default) */}

                            <div className={`${isHovering5 ? "" : "hidden"} flex flex-col justify-center items-center text-center`}>
                                <div className="flex flex-col justify-center items-center py-10 text-center  bg-blue-600 text-white w-full">
                                    <GiCommercialAirplane className="text-6xl" />
                                    <p className="text-2xl font-bold">Plane Freight <br />Service</p>
                                </div>
                                <div className=" py-6 bg-white  px-4 space-y-2">
                                    <p className="text-justify">

                                        Plane Freight Service: Fast, reliable air transport for cargo, facilitating global trade with efficient logistics and secure handling.
                                    </p>
                                    <Link href={`/service`}><button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600 mt-5">
                                        Learn More <FaArrowRight />
                                    </button></Link>
                                </div>
                            </div>
                            {/* First part */}
                            <div
                                className={`bg-white h-[140px] translate-y-64 ${isHovering5 ? "opacity-0" : ""
                                    }`}
                            >
                                <div className="flex justify-center items-center text-center p-4">
                                    <div className="absolute p-6 bg-white rounded-full">
                                        <div className="rounded-full">
                                            <GiCommercialAirplane className="text-6xl text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold pt-36 absolute">
                                        Plane Freight <br />Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 6 */}
                    <div
                        className="h-[440px] bg-cover bg-center relative"
                        style={{ backgroundImage: `url('https://i.ibb.co/rbW3FR9/Parcel-Delivery.jpg')` }}
                        onMouseEnter={() => setIsHovering6(true)}
                        onMouseLeave={() => setIsHovering6(false)}
                    >
                        <div className="p-6">
                            {/* Second part (hidden by default) */}

                            <div className={`${isHovering6 ? "" : "hidden"} flex flex-col justify-center items-center text-center`}>
                                <div className="flex flex-col justify-center items-center py-10 text-center  bg-blue-600 text-white w-full">
                                    <FaPeopleCarryBox className="text-6xl" />
                                    <p className="text-2xl font-bold">Man Freight <br />Service</p>
                                </div>
                                <div className=" py-6 bg-white  px-4 space-y-2">
                                    <p className="text-justify">
                                        Man Freight Service: Dedicated transportation solutions for heavy machinery and equipment, ensuring safe and timely delivery.
                                    </p>
                                    <Link href={`/service`}><button className="btn bg-black text-white rounded-none uppercase hover:bg-blue-600 mt-5">
                                        Learn More <FaArrowRight />
                                    </button></Link>
                                </div>
                            </div>
                            {/* First part */}
                            <div
                                className={`bg-white h-[140px] translate-y-64 ${isHovering6 ? "opacity-0" : ""
                                    }`}
                            >
                                <div className="flex justify-center items-center text-center p-4">
                                    <div className="absolute p-6 bg-white rounded-full">
                                        <div className=" rounded-full">
                                            <FaPeopleCarryBox className="text-6xl text-blue-600" />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold pt-36 absolute">
                                        Man Freight <br />Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============= */}
                </div>
            </div>
        </>
    );
};

export default NewService;