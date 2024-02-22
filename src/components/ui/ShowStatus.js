import React from 'react';
import { FaCreditCard, FaHome, FaRegClipboard, FaShippingFast } from 'react-icons/fa';
import useOrder from '../hooks/useOrder';
import usePayment from '../hooks/usePayment';

const ShowStatus = ({ trackingId }) => {
    console.log(trackingId)
    const [order] = useOrder()
    const OrderId = order.find(order => order._id === trackingId);
    // const [payment] = usePayment().find(payment => payment.payment === "successfully");
    console.log(OrderId?.status)
    const getStatusStep = () => {
        if (OrderId?.status === "success") {
            return 4; // Delivered
        } else if (OrderId?.status === "success") {
            return 3; // On the way
        } else if (OrderId?.status === "success") {
            return 2; // Payment
        } else if (OrderId?.status === "pending") {
            return 1; // Booking
        }
    };

    const getContent = () => {
        return getStatusStep() ;
    };

    return (
        <div>
          {OrderId ? ( <ul className="steps steps-vertical lg:steps-horizontal w-full h-full">
                <li data-content={getContent() === 1 ? "✓" : ""} className={`step ${getStatusStep() >= 1 ? 'step-info' : ''}`}>
                    <span className='flex justify-center items-center gap-2 font-semibold lg:flex-col'><FaRegClipboard className='text-xl text-red-600' /> Booking</span>
                </li>
                <li data-content={getStatusStep() === 2 ? "✓" : ""} className={`step ${getStatusStep() >= 2 ? 'step-info' : ''}`}>
                    <span className='flex justify-center items-center gap-2 lg:flex-col font-semibold'><FaCreditCard className='text-xl text-red-600' /> Payment</span>
                </li>
                <li data-content={getStatusStep() === 3 ? "✓" : ""} className={`step ${getStatusStep() >= 3 ? 'step-info' : ''}`}>
                    <span className="flex justify-center items-center gap-2 lg:flex-col font-semibold"><FaShippingFast className='text-xl text-red-600' /> On the way</span>
                </li>
                <li data-content={getStatusStep() === 4 ? "✓" : ""} className={`step ${getStatusStep() >= 4 ? 'step-info' : ''}`}>
                    <span className='flex justify-center items-center gap-2 lg:flex-col font-semibold'><FaHome className='text-xl text-red-600' /> Delivered</span>
                </li>
            </ul>): (<p className='text-red-600 font-semibold text-lg'>Please, provide valid tracking Id !</p>)}
        </div>
    );
};

export default ShowStatus;