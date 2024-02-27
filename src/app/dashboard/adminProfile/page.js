"use client"

import useAuth from "@/components/hooks/useAuth";
import SimplePieChart from "@/components/shared/PieChart/PieChart";



const AdminProfile = () => {
    const {user} = useAuth()

    return (
        <div className="px-4 py-8 h-screen  space-y-8">
            <h2 className="text-2xl font-bold">
                Hi, <span className="text-orange-700">{user?.displayName ? user?.displayName : "Admin"}</span> Welcome Back!
            </h2>
            <div className="container m-auto overflow-hidden">
                <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-4 ">
                    <SimplePieChart />
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
