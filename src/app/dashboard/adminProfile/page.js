"use client"

import useAllPayment from "@/components/hooks/useAllPayment";
import useAuth from "@/components/hooks/useAuth";
import useParcel from "@/components/hooks/useParcel";
import useReturn from "@/components/hooks/useReturn";
import BarChart from "@/components/shared/Chart/BarChart";
import LineChart from "@/components/shared/Chart/LineChart";
import NewBarChart from "@/components/shared/Chart/NewBarChart";
import PieChart from "@/components/shared/Chart/PieChart";
import { FaJediOrder } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";





const AdminProfile = () => {
    const { user } = useAuth()
    const [parcel] = useParcel();
    const successParcel = parcel?.filter(item => item?.status === "success")
    const pendingParcel = parcel?.filter(item => item?.status === "pending")

    const [paymentAll] = useAllPayment()
    const [returnProduct] = useReturn()
    return (
        <div className="px-4 py-8  space-y-8  ">
            <h2 className="text-2xl font-bold">
                Hi, <span className="text-orange-700">{user?.displayName ? user?.displayName : "Admin"}</span> Welcome Back!
            </h2>
            <div className="container m-auto">
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
                <div className="grid grid-cols-2 gap-4 py-10 ">
                    <div className="col-span-2 lg:col-span-1  shadow-xl"><LineChart /></div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center items-center shadow-xl"><NewBarChart/></div>
                    <div className="col-span-2 lg:col-span-1  shadow-xl"><BarChart /></div>
                    <div className="col-span-2 lg:col-span-1  h-96 shadow-xl flex justify-center items-center"><PieChart /></div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
