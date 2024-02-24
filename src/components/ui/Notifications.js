"use client"
import { IoIosNotifications } from "react-icons/io";
import useOrder from "../hooks/useOrder";
import usePayment from "../hooks/usePayment";
import useApplication from "../hooks/useApplication";
import { MdNotificationsActive } from "react-icons/md";
import { useState } from "react";
import ClipBoard from "../shared/ClipBoard";


const Notifications = () => {
    const [order] = useOrder()
    const [payment] = usePayment()
    const [application] = useApplication()
    const [showAll, setShowAll] = useState(false);

    return (
        <div>
            {order.length && payment.length && application.length === 0 ? (<IoIosNotifications className="text-blue-600 text-4xl relative" />) : (<div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" onClick={() => setShowAll(false)} className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost"><IoIosNotifications className="text-blue-600 text-4xl relative" />
                        <span className="text-white absolute top-2 right-3">{order?.length + payment?.length + application?.length}</span>
                    </label>
                </div>
                <div className="drawer-side z-50 mt-16 h-[95vh] md:mt-[104px] md:h-[91vh] ">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay opacity-0"></label>
                    <ul className="menu p-4 w-72 md:w-96 min-h-full bg-base-200 text-base-content">
                        <h1 className="text-xl font-bold">Notifications</h1>

                        {/* ===================Order============ */}

                       <div className="font-semibold pt-8 flex justify-between items-center">
                       <h3 className="text-lg">Order</h3>
                        <h5 className="text-xs text-end">Tracking Id</h5>
                       </div>
                        {order
                            ?.sort((a, b) => new Date(b.data) - new Date(a.data))
                            .slice(0, showAll ? order.length : 5)
                            .map((item) => (
                                <div key={item._id} className="flex justify-start items-center shadow-md rounded-xl">
                                    <MdNotificationsActive className="text-xl text-blue-600" />
                                    <li className="text-lg">
                                        <p className="flex justify-end">Your Parcel is {item.status}<p className="text-xs hidden md:flex pl-3">{item.deliveryDate}</p> <ClipBoard id={item._id} text={`text-gray-600`} hover={`hover:bg-blue-200`}/></p>
                                    </li>
                                </div>
                            ))}
                        {(showAll && order.length > 5) && (
                            <button className="btn text-blue-600 mt-4" onClick={() => setShowAll(false)}>See Less</button>
                        )}
                        {!showAll && order.length > 5 && (
                            <button className="btn text-blue-600 mt-4" onClick={() => setShowAll(true)}>See More</button>
                        )}

                        {/* ===================Payment=================== */}

                        <div className="font-semibold pt-8 flex justify-between items-center">
                       <h3 className="text-lg">Payment</h3>
                        <h5 className="text-xs text-end">Tracking Id</h5>
                       </div>
                        {payment
                            ?.sort((a, b) => new Date(b.data) - new Date(a.data))
                            .slice(0, showAll ? payment.length : 5)
                            .map((item) => (
                                <div key={item._id} className="flex justify-start items-center shadow-md rounded-xl">
                                    <MdNotificationsActive className="text-xl text-blue-600" />
                                    <li className=" text-lg">
                                        <p className="flex justify-end">
                                            Payment {item.payment}
                                            <p className="text-xs hidden md:flex pl-3">
                                                {item.data.split("T")[0]}
                                            </p>
                                            <ClipBoard id={item._id} text={`text-gray-600`} hover={`hover:bg-blue-200`}/>
                                        </p>
                                    </li>
                                </div>
                            ))}
                        {(showAll && payment.length > 5) && (
                            <button className="btn text-blue-600 mt-4" onClick={() => setShowAll(false)}>See Less</button>
                        )}
                        {!showAll && payment.length > 5 && (
                            <button className="btn text-blue-600 mt-4" onClick={() => setShowAll(true)}>See More</button>
                        )}

                        {/* =============Apply============== */}

                        <h3 className="text-lg font-semibold pt-8">Apply</h3>
                        {application?.slice(0, showAll ? application.length : 2).map((item) => (
                            <div key={item._id} className="flex mt-4 justify-start items-center shadow-md rounded-xl">
                                <MdNotificationsActive className="text-xl text-blue-600" />
                                <li className="p-2 text-lg">
                                    {item.role === 'user' ? "Your application was successfully applied" : "You became a delivery boy"}
                                </li>
                            </div>
                        ))}
                        {(showAll && application.length > 5) && (
                            <button className="btn text-blue-600 mt-4" onClick={() => setShowAll(false)}>See Less</button>
                        )}
                        {!showAll && application.length > 5 && (
                            <button className="btn text-blue-600 mt-4" onClick={() => setShowAll(true)}>See More</button>
                        )}
                    </ul>
                </div>
            </div>)}

        </div>
    );
};

export default Notifications;

