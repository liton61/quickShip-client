"use client";
import Link from "next/link";
import { FaBoxOpen, FaBriefcase, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
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
import { usePathname } from "next/navigation";
import "./Dashboard.css"

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();


  const [users] = useUser();
  const pathname = usePathname()

  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch((error) => console.log(error));
    toast.success("Log out successfully")
  };

  const UserSidebarLinks = (
      <>
        <li>
          <Link href = "/dashboard/myProfile" >
            <span span className = {
              `nav-link ${pathname === '/dashboard/myProfile' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`
            } >
              <CgProfile></CgProfile>My Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/paymentHistory">
            <span className={`nav-link ${pathname === '/dashboard/paymentHistory' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><MdWorkHistory></MdWorkHistory>
          Payment History</span>
          </Link>
        </li>

        <li>
          <Link Link href = "/dashboard/myOrder" >
            <span className={`nav-link ${pathname === '/dashboard/myOrder' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><FaJediOrder></FaJediOrder>
          My Order</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/review">
            <span className={`nav-link ${pathname === '/dashboard/review' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><MdRateReview></MdRateReview>
          Review</span>
          </Link>
        </li>
      </>
    );

    const AdminSidebarLinks = (
      <>
        <li>
          <Link href = "/dashboard/adminProfile" >
            <span span className = {
              `nav-link ${pathname === '/dashboard/adminProfile' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`
            } >
              <CgProfile></CgProfile>
          Admin Profile</span>
          </Link>
        </li>

        <li>
          <Link href="/dashboard/addPost">
            <span className={`nav-link ${pathname === '/dashboard/addPost' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><FaSignsPost></FaSignsPost>
          Blog Add</span>
          </Link>
        </li>

        <li>
          <Link Link href = "/dashboard/parcelManage" >
            <span className={`nav-link ${pathname === '/dashboard/parcelManage' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><FaBoxOpen></FaBoxOpen>
          Parcels Manage</span>
          </Link>
        </li>

        <li>
          <Link href="/dashboard/usersManage">
            <span className={`nav-link ${pathname === '/dashboard/usersManage' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><FaUsers></FaUsers>
          Users Manage</span>
          </Link>
        </li>

        <li>
          <Link href="/dashboard/deliveryBoy">
            <span className={`nav-link ${pathname === '/dashboard/deliveryBoy' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><FaUser></FaUser>
          Delivery Boy</span>
          </Link>
        </li>

        <li>
          <Link href="/dashboard/application">
            <span className={`nav-link ${pathname === '/dashboard/application' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}> <FaBriefcase></FaBriefcase>
          Application</span>
          </Link>
        </li>

        <li>
          <Link href="/dashboard/returnOrder">
            <span className={`nav-link ${pathname === '/dashboard/returnOrder' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`}><GiReturnArrow />
          Return Order</span>
          </Link>
        </li>
        
      </>
    );


  const deliverySidebarLinks = (
    <>
      <li>
          <Link href = "/dashboard/deliveryMenProfile" >
            <span span className = {
              `nav-link ${pathname === '/dashboard/deliveryMenProfile' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`
            } >
              <CgProfile></CgProfile>delivery Men Profile</span>
          </Link>
        </li>

        <li>
          <Link href = "/dashboard/manageReturn" >
            <span span className = {
              `nav-link ${pathname === '/dashboard/manageReturn' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`
            } >
              <CgProfile></CgProfile>Manage Return</span>
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
              <li>
                <Link href = "/" >
                  <span span className = {
                    `nav-link ${pathname === '/' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}`
                  } >
                    <FaHome></FaHome>Home</span>
                </Link>
              </li>
              <li className="">
                {user ? (
                <button
                  onClick={handleLogOut}
                  className="rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                >
                  <span>
                    <BiLogOut></BiLogOut>
                  </span>
                  Logout
                </button>
              ) : (
                <Link
                  className="rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
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
