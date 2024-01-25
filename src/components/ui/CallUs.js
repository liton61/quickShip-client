import Lottie from 'lottie-react';
import React from 'react';
// import phone from '../../asstes/phone.json';
import scooter from '../../asstes/scooter.gif';
import Image from 'next/image';

const CallUs = () => {
    return (
        <div className='container mx-auto lg:px-0 px-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="card">
                    <div className="w-full">
                        {/* <Lottie animationData={phone}></Lottie> */}
                        <Image src={scooter} height={500} alt="" />
                    </div>
                </div>
                <div className="card justify-center text-left space-y-5">
                    <h2 className="text-xl lg:text-4xl font-bold">
                        Do You Want A Fast <br /> Service? Just Call Us.
                    </h2>
                    <p className="text-lg text-justify">
                        Fast delivery refers to the swift transportation of goods or services from a seller to a buyer, typically within a significantly shorter time frame than standard delivery options. This expedited process is characterized by efficient logistics, streamlined operations, and often involves utilizing dedicated transportation services or prioritized shipping methods. Fast delivery is favored by consumers and businesses alike for its ability to meet urgent needs, enhance customer satisfaction, and facilitate timely transactions in various industries such as e-commerce, logistics, food delivery, and more.
                    </p>
                    <div>
                        <button className="bg-blue-500 uppercase px-4 py-2 rounded font-bold text-white">Call us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallUs;