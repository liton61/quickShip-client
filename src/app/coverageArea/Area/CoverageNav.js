import Link from 'next/link';
import React from 'react';
import { IoCallSharp } from "react-icons/io5";

const CoverageNav = () => {
    return (
        <div className="flex justify-between items-center w-full h-16">
            <div className="">
                <Link href={"/"} className="text-2xl font-bold">Quick Ship</Link>
            </div>
            <div className="flex items-center">
                <span className='text-xl font-bold text-purple-600 mr-1'>
                    <IoCallSharp></IoCallSharp>
                </span>
                <p className='text-sm'>CALL US <span className='text-md text-purple-300 ml-2'>09610007339</span></p>
            </div>
        </div>
    );
};

export default CoverageNav;