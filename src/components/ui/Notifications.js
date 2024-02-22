import { IoIosNotifications } from "react-icons/io";
import useOrder from "../hooks/useOrder";
import usePayment from "../hooks/usePayment";
import useApplication from "../hooks/useApplication";


const Notifications = () => {
    const [order] = useOrder()
    const [payment] = usePayment()
   const [application] = useApplication()
    return (
        <div>
             <details className="dropdown  dropdown-end">
                <summary className="m-1 btn btn-ghost"><IoIosNotifications className="text-blue-600 text-4xl relative" />
                    <span className="text-white absolute top-2 right-6">{order.length + payment.length + application.length}</span>
                </summary>
                <ul className="p-2 w-96 shadow menu dropdown-content z-[1] bg-base-100 rounded-box max-h-[700px] grid grid-cols-1 overflow-y-scroll">
                   {order.map((item)=><li key={item._id} className="p-2 text-lg text-center shadow block">Your product is {item.status}</li>)}
                   {payment.map((item)=><li key={item._id} className="p-2 text-lg text-center shadow block">Your payment are {item.payment} done</li>)}
                   {application?.map((item)=><li key={item._id} className="p-2 text-lg text-center shadow block">You are applying for the post of {item.role}</li>)}
                 
                </ul>
            </details>
        </div>
    );
};

export default Notifications;