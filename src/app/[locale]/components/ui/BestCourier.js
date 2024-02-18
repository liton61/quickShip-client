import React from 'react';
import deliveryimg from '../../../../asstes/delivery-boy.png';
import Image from 'next/image';

const BestCourier = () => {
    return (
        <div>
            <div className="flex">
                <div className="hero bg-base-200 lg:px-0 px-5">
                    <div className="container lg:px-20 grid grid-cols-1 lg:grid-cols-2">
                        <div>
                            <div className="py-10">
                                <Image src={deliveryimg} height={500} alt="logo" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-center py-5">
                                    BEST <span className="text-[#f5ab35]">COURIER </span>
                                    SERVICES{" "}
                                </h1>
                                <p className="text-justify lg:ml-10">
                                    QuickShip, the epitome of efficiency in the realm of
                                    international courier services, stands as a beacon for swift and
                                    reliable parcel deliveries across borders. Renowned for its
                                    commitment to expedited shipping, QuickShip has revolutionized
                                    the logistics landscape with its advanced technology and
                                    seamless operations. Catering to a diverse clientele, QuickShip
                                    ensures that packages, regardless of size or destination, are
                                    transported with unparalleled speed and precision. From a
                                    seamless online booking experience to real-time tracking,
                                    QuickShip priorities customer satisfaction, offering a
                                    comprehensive solution for individuals and businesses seeking
                                    rapid, hassle-free international deliveries. In an
                                    interconnected world, QuickShip stands as a trusted partner,
                                    dedicated to bridging distances and delivering promises with
                                    speed and reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestCourier;