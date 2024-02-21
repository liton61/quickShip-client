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
                <summary className="m-1 btn btn-ghost"><IoIosNotifications className="text-white text-4xl relative" />
                    <span className="text-white absolute top-2 right-6">{order.length + payment.length + application.length}</span>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 scroll-m-1">
                   {order.map((item)=><li key={item._id}>Your product is {item.status}</li>)}
                   {payment.map((item)=><li key={item._id}>Your product is {item.payment}</li>)}
                   {application?.map((item)=><li key={item._id}>Your isDeliveryMan is {item.role}</li>)}
                 
                </ul>
            </details>
        </div>
    );
};

export default Notifications;