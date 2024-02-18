import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";

const OurServices = () => {
  const t = useTranslations("Service");

  const services = [
    {
      title: t('Parcel Delivery'),
      image: 'https://i.ibb.co/VQfX6rN/parcel-delivery.webp',
      description: t('Parcel Delivery description'),
    },
    {
      title: t('Bulk Shipment'),
      image: 'https://i.ibb.co/NWxGShL/bulk-shipment.webp',
      description: t('Bulk Shipment description'),
    },
    {
      title: t('Customized Solutions'),
      image: 'https://i.ibb.co/m6wqVDH/customised-solutions.webp',
      description: t('Customized Solutions description'),
    },
    {
      title: t('Line Haul'),
      image: 'https://i.ibb.co/5MbBDpr/line-haul.webp',
      description: t('Line Haul description'),
    },
    {
      "title": t("Load/Unload"),
      "image": "https://i.ibb.co/Lv95SJR/load-unload.webp",
      "description": t("Load/Unload description")
    },
    {
      "title": t("Logistics as a service"),
      "image": "https://i.ibb.co/bH5Ns8D/logistics-service.webp",
      "description": t("Logistics as a service description")
    },
    {
      "title": t("Truck Rent"),
      "image": "https://i.ibb.co/0GWxJqg/truck-rent.webp",
      "description": t("Truck Rent description")
    },
    {
      "title": t("Warehouse"),
      "image": "https://i.ibb.co/3N2R3CW/warehouse.webp",
      "description": t("Warehouse description")
    },
  ]

  return (
    <div>
      <div className="container m-auto py-16">
        <SectionTitle header={t("title")} miniHeader={t("miniHeader")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-3">
          {
            services.map(ser => (
              <div key={ser.title}>
                <div className="overflow-hidden  cursor-pointer relative group shadow-xl">
                  <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                    <div>
                      <div className="transform p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                        <div className="font-bold text-blue-600">{ser.title}</div>
                        <div className="opacity-70 text-sm">
                          {ser.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    alt="nai"
                    width={200}
                    height={400}
                    className="object-cover w-full h-full  aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                    src={ser.image}
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default OurServices;
