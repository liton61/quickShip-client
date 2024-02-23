"use client"

import Statistics from "@/components/ui/BarChart/Statistics";
import useAuth from "../../../components/hooks/useAuth";


const AdminProfile = () => {
    const {user} = useAuth()

    return (
        <div className="px-4 py-8 h-screen bg-[#010313]  space-y-8">
            <h2 className="text-2xl font-bold text-white">
                Hi, <span className="text-orange-700">{user?.displayName}</span> Welcome Back!
            </h2>
            <div className="overflow-hidden w-full">
                <Statistics/>
            </div>
        </div>
    );
};

export default AdminProfile;