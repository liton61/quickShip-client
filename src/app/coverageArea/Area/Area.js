import Image from "next/image";
import Link from "next/link";
import map from "../../../../public/bangladash-map (1).svg"
import Container from "@/components/shared/Container";

const Area = () => {
    return (
        <div className="bg-[#000000] text-[#FCFCFC]" >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-0 gap-10 py-10">
                    <div>
                        <Image src={map} alt="map"></Image>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <h1 className="text-2xl text-justify">Quick Ship provides logistics support in all 64 districts and 493 sub districts across Bangladesh</h1>
                            <p className="text-lg text-gray-400 my-8 text-justify">Whatever your logistics need, we guarantee the fastest service all over the country</p>
                            <Link
                                href={"/coverageArea"}
                                className=" text-white font-bold py-3 px-6 rounded border border-purple-700  hover:bg-purple-700"
                            >
                                Check our coverage area
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Area;