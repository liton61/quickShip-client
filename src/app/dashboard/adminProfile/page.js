"use client"

import useAuth from "@/components/hooks/useAuth";
import BarChart from "@/components/shared/PieChart/BarChart";
import LineChart from "@/components/shared/PieChart/LineChart";
import PieChart from "@/components/shared/PieChart/PieChart";





const AdminProfile = () => {
    const { user } = useAuth()

    return (
        <div className="px-4 py-8 h-screen  space-y-8">
            <h2 className="text-2xl font-bold">
                Hi, <span className="text-orange-700">{user?.displayName ? user?.displayName : "Admin"}</span> Welcome Back!
            </h2>
            <div className="container m-auto">
                <div className="grid grid-cols-2 gap-4 ">
                    <div className="col-span-2 lg:col-span-1 shadow-xl"><LineChart/></div>
                    <div className="col-span-2 lg:col-span-1 shadow-xl"><LineChart/></div>
                    <div className="col-span-2 lg:col-span-1  shadow-xl"><BarChart/></div>
                    <div className="col-span-2 lg:col-span-1  shadow-xl"><PieChart/></div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
