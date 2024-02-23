import { IoIosNotifications } from "react-icons/io";
import useOrder from "../hooks/useOrder";
import usePayment from "../hooks/usePayment";
import useApplication from "../hooks/useApplication";
import { MdNotificationsActive } from "react-icons/md";



const Notifications = () => {
    const [order] = useOrder()
    const [payment] = usePayment()
    const [application] = useApplication()
    console.log(order, payment, application)
    return (
        <div>
            {order.length && payment.length && application.length === 0 ? (<IoIosNotifications className="text-blue-600 text-4xl relative" />) : (<details className="dropdown  dropdown-end">
                <summary className="m-1 btn btn-ghost"><IoIosNotifications className="text-blue-600 text-4xl relative" />
                    <span className="text-white absolute top-2 right-6">{order?.length + payment?.length + application?.length}</span>
                </summary>
                <ul className="p-2  w-64 lg:w-96 shadow menu dropdown-content z-[1] bg-base-100 rounded-box max-h-[700px] grid grid-cols-1 overflow-y-scroll">
                   
                <h1 className="text-xl font-bold">Notifications</h1>
                    {order?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-lg shadow block">Your product is {item.status}</li></div>))}
                    {order?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2  text-xs lg:text-lg shadow block">Your product is {item.status}</li></div>))}

                    {payment?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-lg  shadow block">Your payment are {item.payment} done</li></div>))}
                    {payment?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-xs lg:text-lg shadow block">Your payment are {item.payment} done</li></div>))}

                    {application?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-lg  shadow block">{item.role === 'user' ? " your  application successfully applied " : " You become a delivery Boy"}</li></div>))}
                    {application?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-xs lg:text-lg  shadow block">{item.role === 'user' ? " your  application successfully applied " : " You become a delivery Boy"}</li></div>))}


                </ul>
            </details>)}

        </div>
    );
};

export default Notifications;