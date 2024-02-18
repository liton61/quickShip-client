

import React from "react";
import wShip from "../../../../../public/W ship.json";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LottieEffect from "../shared/Lottie";




const Banner = () => {


  const t = useTranslations('Index');
  return (
    <div>
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/f9FDs29/bn.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-3xl lg:text-7xl font-bold ">
                {t("title")}
              </h1>
              <p>
               {t('subTitle')}
              </p>
              <div className="join">
                <div>
                  <div>
                    <input
                      className="input input-bordered join-item lg:w-96 md:w-96 w-48 text-gray-600"
                      placeholder={t('trackId')}
                    />
                  </div>
                </div>
                <div className="indicator">
                  <Link href={"/status"}>
                    <button className="btn rounded-l-none bg-blue-500 text-white">
                      {t('track')}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card  w-full max-w-xl  ">
              <div className="col-span-4">
                <LottieEffect image={wShip} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
