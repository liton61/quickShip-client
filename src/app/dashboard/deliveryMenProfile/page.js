"use client"
import React, { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import useAuth from "@/components/hooks/useAuth";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaJediOrder } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import useParcel from "@/components/hooks/useParcel";
import useAllPayment from "@/components/hooks/useAllPayment";
import useReturn from "@/components/hooks/useReturn";

const DeliveryMenProfile = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const { user } = useAuth();
  const [parcel] = useParcel();
  const successParcel = parcel?.filter(item => item?.status === "success")
  const pendingParcel = parcel?.filter(item => item?.status === "pending")

  const [paymentAll] = useAllPayment()
  const [returnProduct] = useReturn()
  console.log(paymentAll.amount);

 // Calculate total parcel amount
  // const totalParcelAmount = parcel.reduce((total, current) => total + parseFloat(current.amount), 0);
  // console.log(totalParcelAmount);


  // Sample data structure for the bar chart
  const data = [
    { name: "Payment", value: paymentAll?.length },
    { name: "Order", value: parcel?.length },
    { name: "Delivered", value: successParcel?.length },
    { name: "Return", value: returnProduct?.length },
    { name: "Delivery", value: pendingParcel?.length }
  ];

  return (
    <div className=" py-5 space-y-7 p-5">
      <h2 className="text-2xl font-bold">
        Hi, <span className="text-blue-600">{user?.displayName ? user.displayName : "There"}</span> Welcome Back!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#dbde2d] to-[#822ee9] px-8 py-8 rounded-md">
          <span className="text-5xl">
            <IoMdCheckmarkCircle className="text-green-400" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">{successParcel?.length}</h2>
            <p className="text-lg font-bold">Delivered</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-indigo-500 via-purple-800 to-pink-800 px-8 py-8 rounded-md">
          <span className="text-5xl">
            <TbTruckDelivery className="text-blue-400" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">{pendingParcel?.length}</h2>
            <p className="text-lg font-bold">Out Of Delivery</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#72fe48] to-[#db6232] px-8 py-8 rounded-md">
          <span className="text-5xl">
            <FaJediOrder className="text-blue-400" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">{parcel?.length}</h2>
            <p className="text-lg font-bold">Order</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-center items-center">
        <div className="col-span-2">
          <h2 className="text-2xl font-bold pb-4">Product Overview</h2>
          <BarChart className = " py-5 pr-5 rounded-md shadow-xl"
          width = {
            450
          }
          height = {
            350
          }
          data = {
            data
          } >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#6B25AC">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === hoveredBar ? "#010313" : "#6B25AC"} // Change color on hover
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl font-bold pb-4">Total Earnings</h2>
          <div className = "card  py-10 rounded-md shadow-xl" >
            <figure className="">
              <span className="text-7xl rounded-full p-5 bg-black text-purple-600"><FaHandHoldingDollar></FaHandHoldingDollar></span>
            </figure>
              <p className="text-2xl font-bold text-center py-1">120$</p>
              <p className="text-xs text-center  py-1">All Time Total Earnings</p>
              <div className="px-10 py-3">
                <hr className="border-gray-700"/>
              </div>
              <p className="py-2 text-sm text-center ">Total revenue : 1203$</p>
              <p className="text-center py-2 text-sm ">My Earnings : 120$</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMenProfile;
