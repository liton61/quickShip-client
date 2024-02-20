import Image from "next/image";


const OurServices = () => {
  return (
    <div className="bg-base-200">
    <div className="container mx-auto lg:px-20 px-5 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">We provide services that <br></br> you can rely on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/VQfX6rN/parcel-delivery.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Parcel <span className="text-[#ec3900] ">Delivery</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              First-mile pickup, last-mile delivery services for individuals (C2C), small businesses (B2C) and corporates (B2B).
            </p>
          </div>
        </div>
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/NWxGShL/bulk-shipment.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Bulk <span className="text-[#ec3900] ">Shipment</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              Specialized solutions for large items and large numbers.
            </p>
          </div>
        </div>
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/m6wqVDH/customised-solutions.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Customized <span className="text-[#ec3900] ">Solutions</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              Tailor made solutions for your unique business needs.
            </p>
          </div>
        </div>
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/5MbBDpr/line-haul.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Line <span className="text-[#ec3900] ">Haul</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              Freight movement solutions including FTL (full truckload), LTL (less than truckload).
            </p>
          </div>
        </div>
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/Lv95SJR/load-unload.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Load/ <span className="text-[#ec3900] ">Unload</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              Industry-specific loading/unloading services in factories, project sites, and ports.
            </p>
          </div>
        </div>
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/bH5Ns8D/logistics-service.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Logistics as <span className="text-[#ec3900] ">a service</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              Outsource logistics requirements, get a dedicated team for your company.
            </p>
          </div>
        </div>
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/0GWxJqg/truck-rent.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Truck <span className="text-[#ec3900] ">Rent</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              Open trucks and covered vans for rent any size, anywhere in BD.
            </p>
          </div>
        </div>
        <div className="w-full border">
          <div className="">
            <h2 className="card-title text-xl font-bold ">
              {" "}
              <Image className="w-full"
                src="https://i.ibb.co/3N2R3CW/warehouse.webp"
                width={200}
                height={200}
                alt="logo"
              />
              <br />
            </h2>
            <div className="text-xl font-semibold p-2">
              Warehouse<span className="text-[#ec3900] ">house</span>{" "}
            </div>
            <p className="text-md text-justify p-2">
              Complete fulfillment solutions including storing, sorting, processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default OurServices;