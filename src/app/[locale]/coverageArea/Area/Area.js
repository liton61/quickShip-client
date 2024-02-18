import Image from "next/image";
import Link from "next/link";
import map from "../../../../../public/bangladash-map (1).svg"
import { useTranslations } from "next-intl";


const Area = () => {
    const t = useTranslations("Area")
    return (
        <div className="container m-auto" >
            <div className="px-4">
                <div className="flex flex-col md:flex-row justify-center items-center py-6">
                    <div className="">
                        <Image src={map} alt="map" className="drop-shadow-2xl  hover:drop-shadow-none"/>
                    </div>
                    <div className="">
                        <h1 className="text-3xl font-extrabold ">{t("text")}</h1>
                        <p className="text-lg  my-8">{t("subText")}</p>
                        <Link
                            href={"/coverageArea"}
                            className="  font-bold py-3 px-6 rounded border border-blue-600 bg-white hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500"
                        >
                           {t("button")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Area;