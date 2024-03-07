import Image from "next/image";
import Link from "next/link";
import map from "../../../../public/bangladash-map (1).svg"
import Container from "@/components/shared/Container";

const Area = () => {
    return (
        <div className="bg-base-200" >
            <div  style={{ backgroundImage: `url(https://i.ibb.co/cXzpnkP/front-view-bow-large-blue-600nw-1892071042.webp)` }}
        className="hero min-h-[700px] bg-fixed">
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div className="container m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-0 gap-10 py-10 p-4">
                        <div>
                            <Image src={map} alt="map"></Image>
                        </div>
                        <div className="flex justify-center items-center text-white">
                            <div>
                                <h1 className="text-2xl text-justify text-white">Quick Ship provides logistics support in all 64 districts and 493 sub districts across Bangladesh</h1>
                                <p className="text-lg text-gray-200 my-8 text-justify">Whatever your logistics need, we guarantee the fastest service all over the country</p>
                                <Link
                                    href={"/coverageArea"}
                                    className="  font-bold py-3 px-6 rounded border border-purple-700  hover:bg-purple-700"
                                >
                                    Check our coverage area
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Area;