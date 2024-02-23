"use client";
import Link from "next/link";
import { FaBoxOpen, FaBriefcase, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdLogin, MdLogout } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdRateReview } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import { FaJediOrder } from "react-icons/fa";
import useAuth from "../../components/hooks/useAuth";
import useUser from "../../components/hooks/useUser";
import ChatBot from "../../components/chat/chat";
import LottieEffect from "@/components/shared/Lottie";
import logo from '../../../public/Logo (1).json';
import { FaSignsPost } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import toast from "react-hot-toast";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();


  const [users] = useUser();

  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch((error) => console.log(error));
    toast.success("Log out successfully")
  };

  // console.log(users?.role);

  const UserSidebarLinks = (
    <>
      <li id="sidebar">
        <Link
          href="/dashboard/myProfile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <CgProfile></CgProfile>
          My Profile
        </Link>
      </li>

      <li id="sidebar">
        <Link
          href="/dashboard/paymentHistory"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <MdWorkHistory></MdWorkHistory>
          Payment History
        </Link>
      </li>

      {/* <li id="sidebar">
        <Link
          href="/dashboard/return"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <GiReturnArrow></GiReturnArrow>
          Return Product
        </Link>
      </li> */}

      <li id="sidebar">
        <Link
          href="/dashboard/myOrder"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaJediOrder></FaJediOrder>
          My Order
        </Link>
      </li>

      <li id="sidebar">
        <Link
          href="/dashboard/review"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <MdRateReview></MdRateReview>
          Product Review
        </Link>
      </li>
    </>
  );

  const AdminSidebarLinks = (
    <>
      <li id="sidebar">
        <Link
          href="/dashboard/adminProfile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <CgProfile></CgProfile>
          Admin Profile
        </Link>
      </li>

      <li id="sidebar">
        <Link
          href="/dashboard/addPost"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaSignsPost></FaSignsPost>
          Blog Add
        </Link>
      </li>
      <li id="sidebar">
        <Link
          href="/dashboard/parcelManage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaBoxOpen></FaBoxOpen>
          Manage Parcels
        </Link>
      </li>

      <li id="sidebar">
        <Link
          href="/dashboard/usersManage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaUsers></FaUsers>
          Manage Users
        </Link>
      </li>
      <li id="sidebar">
        <Link
          href="/dashboard/deliveryBoy"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaUser></FaUser>
          Delivery Boy
        </Link>
      </li>
      <li id="sidebar">
        <Link
          href="/dashboard/application"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaBriefcase></FaBriefcase>
          Application
        </Link>
      </li>

      <li id="sidebar">
        <Link
          href="/dashboard/returnOrder"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <GiReturnArrow />
          Return Order
        </Link>
      </li>
    </>
  );

  const deliverySidebarLinks = (
    <>
      <li id="sidebar">
        <Link
          href="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <CgProfile></CgProfile>
          Delivery men Profile
        </Link>
      </li>

      <li id="sidebar">
        <Link
          href="/dashboard/manageReturn"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <CgProfile></CgProfile>
          Manage Return
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-[#0D0D21] flex justify-between items-center py-3 px-5 lg:hidden">
            <label
              htmlFor="my-drawer-2"
              className="btn w-20 bg-[#0D0D21] border-none  text-white drawer-button lg:hidden"
            >
              <span className="text-2xl">
                <VscThreeBars></VscThreeBars>
              </span>
            </label>
            <Link
              href={"/"}
              className="btn btn-ghost normal-case items-center text-xs md:text-xl"
            >
                <span className="text-white">Quick Ship</span>
            </Link>
          </div>
          {/* Page content here */}
          {children}
          <ChatBot />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full text-white bg-[#0D0D21] flex justify-between">
            {/* Sidebar content here */}
            <div>
              <div>
                <Link
                  href={"/"}
                  className="flex flex-col space-x-2 font-bold mt-5 normal-case items-center text-xs md:text-xl"
                >
                  <span className="w-32">
                  <LottieEffect image={logo} />
                  </span>
                  <span className="text-blue-600 hover:text-white italic">Quick Ship</span>
                </Link>
              </div>
              <div className="divider"></div>
              <div>{UserSidebarLinks}</div>
              <div className="divider"></div>
              {users?.role === "admin" ? AdminSidebarLinks : ""}
              <div className="divider"></div>
              {users?.role === "deliveryMen" || "admin" ? deliverySidebarLinks : ""}
              <div className="divider"></div>
            </div>
            <div>
              <li id="sidebar">
                <Link
                  href="/"
                  className={({ isActive, isPending }) =>
                    isPending ? `pending` : isActive ? `active` : ""
                  }
                >
                  <span>
                    <FaHome></FaHome>
                  </span>
                  Home
                </Link>
              </li>
              <li id="sidebar">
                {user ? (
                <button
                  onClick={handleLogOut}
                  className="hover:font-bold flex items-center" /* to={"/login"} */
                >
                  <span className="">
                    <BiLogOut></BiLogOut>
                  </span>
                  Logout
                </button>
              ) : (
                <Link
                  className="hover:font-bold flex items-center"
                  href={"/login"}
                >
                  <span className="">
                    <MdLogin></MdLogin>
                  </span>
                  Login
                </Link>
              )}
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
