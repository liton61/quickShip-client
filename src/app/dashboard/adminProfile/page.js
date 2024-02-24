"use client"

// import Statistics from "../../../components/ui/BarChart/Statistics";
// import DonutChart from "../../../components/ui/PieChart/DonutChart";



const Page = () => {


    return (
        <div className="px-4 py-8 h-screen  space-y-8">
        <h2 className="text-2xl font-bold">
            Hi, <span className="text-orange-700">Admin</span> Welcome Back!
        </h2>
        <div className="container m-auto overflow-hidden pt-48">
            <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-4 ">
                {/* <Statistics /> */}
                {/* <DonutChart /> */}
            </div>
        </div>
    </div>
    );
};

export default Page;