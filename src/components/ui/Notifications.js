import { IoIosNotifications } from "react-icons/io";

const Notifications = () => {
    return (
        <div>
             <details className="dropdown">
                <summary className="m-1 btn btn-ghost"><IoIosNotifications className="text-white text-4xl relative" />
                    <span className="text-white absolute top-2 right-6">1</span>
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
        </div>
    );
};

export default Notifications;