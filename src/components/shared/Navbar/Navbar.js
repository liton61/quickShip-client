"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../../../public/Logo (1).json";
import avatar from "../../../asstes/avatar.png"
import { FaHome } from "react-icons/fa";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { MdLogin } from "react-icons/md";
// import { useRouter } from "next/navigation";
import useAuth from "@/components/hooks/useAuth";
import auth from "@/components/Config/firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
 
  // const router = useRouter()
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(auth)
      .then((result) => {
        // console.log(result?.user);
        toast.success("Successfully LogOut");

      })
      .catch((error) => {
        // console.log(error?.message);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isNavbarScrolled = scrollTop > 0;
      setIsScrolled(isNavbarScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="navbar"
        style={{
          position: "fixed",
          backgroundColor: isScrolled ? "#000C21" : "transparent",
          zIndex: 1000,
        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
              {/* <li>
                <Link href="/pricing">Pricing</Link>
              </li> */}
              <li>
                <Link href="/calculator">Calculator</Link>
              </li>
              <li>
                <Link href="/pricing">Product Order</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <button className="w-44 justify-center items-center">
                <span>
                  <Lottie animationData={logo}></Lottie>
                </span>
              </button>
              <p className="font-serif font-semibold italic text-xl">
                <span className="text-blue-500 -ml-10">Quick Ship</span>
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-md mx-3 font-semibold text-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md mx-3 font-semibold text-blue-500">
              <Link href="/service">Services</Link>
            </li>
            {/* <li className="text-md mx-3 font-semibold text-blue-500">
              <Link href="/pricing">Pricing</Link>
            </li> */}
            <li className="text-md mx-3 font-semibold text-blue-500">
              <Link href="/calculator">Calculator</Link>
            </li>
            <li className="text-md mx-3 font-semibold text-blue-500">
                <Link href="/pricing">Booking</Link>
              </li>
            {/* <li className="text-md mx-3 font-semibold text-blue-500">
              <Link href="/dashboard">Dashboard</Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user ? (
                  <>
                    <div className="rounded-full border border-blue-600">
                  <Image alt="" src={user?.photoURL} width={50} height={50} />
                </div>
                  </>
                ) : (
                  <Image src={avatar} height={50} width={50} alt="avatar"></Image>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] py-2  space-y-3 px-4 bg-[#202074] text-white shadow menu menu-sm dropdown-content hover:bg-[#010313] hover:text-blue-300   rounded-md w-60"
            >
              <h2
                data-aos="flip-up"
                className="text-xs text-purple-600 font-bold"
              >
                {user ? user?.displayName : "No Any User"}
              </h2>
              <hr className="border-gray-600" />

              <Link className="hover:font-bold flex items-center" href={"/"}>
                <span className="mr-1">
                  <FaHome></FaHome>
                </span>
                Home
              </Link>
              <hr className="border-gray-600" />
              <Link
                className="hover:font-bold flex items-center"
                href={"/dashboard/myProfile"}
              >
                <span className="mr-1">
                  <BiSolidDashboard></BiSolidDashboard>
                </span>
                Dashboard
              </Link>
              <hr className="border-gray-600" />
              {user ? (
                <button
                  onClick={handleLogout}
                  className="hover:font-bold flex items-center text-left" /* to={"/login"} */
                >
                  <span className="mr-1">
                    <BiLogOut></BiLogOut>
                  </span>
                  Logout
                </button>
              ) : (
                <Link
                  className="hover:font-bold flex items-center"
                  href={"/login"}
                >
                  <span className="mr-1">
                    <MdLogin></MdLogin>
                  </span>
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
        <div>
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
