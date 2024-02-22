import React from 'react';
import { FaCreditCard, FaHome, FaRegClipboard, FaShippingFast } from 'react-icons/fa';
import useOrder from '../hooks/useOrder';
import usePayment from '../hooks/usePayment';

const ShowStatus = ({ trackingId }) => {
    const [order] = useOrder().filter(order => order._id === trackingId);
    const [payment] = usePayment().filter(payment => payment.payment === "pending");

    const getStatusStep = () => {
        if (order && payment) {
            return 3; // On the way
        } else if (order) {
            return 2; // Payment
        } else {
            return 1; // Booking
        }
    };

    const getContent = () => {
        return getStatusStep() === 1 ? "✓" : "";
    };

    return (
        <div>
            <ul className="steps steps-vertical lg:steps-horizontal w-full h-full">
                <li data-content={getContent()} className={`step ${getStatusStep() >= 1 ? 'step-info' : ''}`}>
                    <span className='flex justify-center items-center gap-2 font-semibold lg:flex-col'><FaRegClipboard className='text-xl' /> Booking</span>
                </li>
                <li className={`step ${getStatusStep() >= 2 ? 'step-info' : ''}`}>
                    <span className='flex justify-center items-center gap-2 lg:flex-col font-semibold'><FaCreditCard className='text-xl' /> Payment</span>
                </li>
                <li className={`step ${getStatusStep() >= 3 ? 'step-info' : ''}`}>
                    <span className="flex justify-center items-center gap-2 lg:flex-col font-semibold"><FaShippingFast className='text-xl' /> On the way</span>
                </li>
                <li className="step">
                    <span className='flex justify-center items-center gap-2 lg:flex-col font-semibold'><FaHome className='text-xl' /> Delivered</span>
                </li>
            </ul>
        </div>
    );
};

export default ShowStatus;