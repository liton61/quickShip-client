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
        <div className="dropdown dropdown-end">
      <div div tabIndex = {
          0
      }
      role = "button"
      className = "btn btn-ghost text-blue-600 btn-circle" >
        <div className="indicator">
          <span><IoIosNotifications className="w-6 h-6 "></IoIosNotifications></span>
          <span className="badge badge-xs bg-red-700 text-white indicator-item">{order?.length + payment?.length + application?.length}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <ul className="p-2  w-64 lg:w-96 shadow menu dropdown-content z-[1] bg-base-100 rounded-box max-h-[700px] grid grid-cols-1 overflow-y-scroll">
                   
                <h1 className="text-xl font-bold">Notifications</h1>
                    {order?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-lg shadow block">Your product is {item.status}</li></div>))}
                    {order?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2  text-xs lg:text-lg shadow block">Your product is {item.status}</li></div>))}

                    {payment?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-lg  shadow block">Your payment are {item.payment} done</li></div>))}
                    {payment?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-xs lg:text-lg shadow block">Your payment are {item.payment} done</li></div>))}

                    {application?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-lg  shadow block">{item.role === 'user' ? " your  application successfully applied " : " You become a delivery Boy"}</li></div>))}
                    {application?.map((item) => (<div key={item._id} className="flex justify-start items-center"><MdNotificationsActive className="text-xl" /><li className="p-2 text-xs lg:text-lg  shadow block">{item.role === 'user' ? " your  application successfully applied " : " You become a delivery Boy"}</li></div>))}


                </ul>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Notifications;