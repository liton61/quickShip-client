import { useTranslations } from "next-intl";
import {
  FaBiking,
  FaEdit,
  FaRegAddressCard,
  FaToolbox,
  FaUpload,
} from "react-icons/fa";

import TiltWrapper from "../hooks/useTilt";


const Parcel = () => {
  const t = useTranslations('Works');

  const items = [
    {
      "icon": "FaEdit",
      "title": t("Parcel Register"),
      "description": t("Parcel Register description")
    },
    {
      "icon": "FaUpload",
      "title": t("Parcel Loading"),
      "description": t("Parcel Loading description")
    },
    {
      "icon": "FaRegAddressCard",
      "title": t("Parcel In-transit"),
      "description": t("Parcel In-transit description")
    },
    {
      "icon": "FaBiking",
      "title": t("Parcel Delivery"),
      "description": t("Parcel Delivery description")
    }
  ]



  // Icon mapping
  const iconMap = {
    "FaEdit": <FaEdit className="icon relative w-16 h-16" />,
    "FaUpload": <FaUpload className="icon relative w-16 h-16" />,
    "FaRegAddressCard": <FaRegAddressCard className="icon relative w-16 h-16" />,
    "FaBiking": <FaBiking className="icon relative w-16 h-16" />,
    default: <FaToolbox className="icon relative w-16 h-16" />
  };


  return (
    <div className="py-10">
      <div className="card-body flex items-center justify-center px-0">
        <div>
          <h5 className="text-blue-600 text-center italic text-xl mb-4 mt-5">
            --- {t('subHeading')} ---
          </h5>
          <h2 className="my-3 card-title text-4xl font-bold uppercase italic lg:px-0 px-5">
            {t("heading")}
          </h2>
        </div>
        <div className="container mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:px-20 px-5">
          {items.map(item => (
            <div key={item.icon}>
              <TiltWrapper>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-blue-500 rounded-lg shadow-2xl">
                  <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                  </svg>

                  <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient( transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    {iconMap[item.icon] || iconMap.default}
                  </div>
                  <div className="relative text-white px-6 pb-6 mt-6 text-center">
                    <span className="block font-semibold text-lg -mb-1">{item.title}</span>
                    <div className="flex justify-between">
                      <span className="block opacity-75">{item.description}</span>
                      <span className=" text-blue-500  leading-none flex "></span>
                    </div>
                  </div>

                </div>
              </TiltWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parcel;
