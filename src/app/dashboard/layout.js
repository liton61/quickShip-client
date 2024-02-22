"use client";
import Link from "next/link";
import { FaBoxOpen, FaBriefcase, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
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

const DashboardLayout = ({ children }) => {
  const { user } = useAuth();


  const [users] = useUser();

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
          All Order
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
          Review
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
              <div>
                <li id="sidebar">
                  {user ? (
                    <button
                      className={({ isActive, isPending }) =>
                        isPending ? `pending` : isActive ? `active` : ""
                      }
                    // onClick={handleLogout}
                    >
                      <span>
                        <MdLogout></MdLogout>
                      </span>
                      Logout
                    </button>
                  ) : (
                    ""
                  )}
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
