"use client";

import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";
import logo from "../../../../public/Logo (1).json";
import avatar from "../../../assets/avatar.png";
import { FaHome } from "react-icons/fa";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { MdLogin } from "react-icons/md";
// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import LottieEffect from "../Lottie";
import Notifications from "@/components/ui/Notifications";




const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // const router = useRouter()
  const { user, logout } = useAuth();


  const handleLogOut = () => {
    logout()
      .then(() => { })
      .catch((error) => console.log(error));
    toast.success("Log out successfully")
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const isNavbarScrolled = scrollTop > 0;
  //     setIsScrolled(isNavbarScrolled);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="bg-[#000C21]">
      <div
        className="navbar  container m-auto">
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
                <Link href="/pricing">Booking</Link>
              </li>
              {
              user ? <li>
                <Link href="/job">Job</Link>
              </li> : ""

            }

              <li>
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <button className="w-40 justify-center items-center">
                <span>
                  <LottieEffect image={logo} />
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
            <li className="text-md mx-3 font-semibold text-blue-500 hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md mx-3 font-semibold text-blue-500 hover:text-white">
              <Link href="/service">Services</Link>
            </li>
            {/* <li className="text-md mx-3 font-semibold text-blue-500">
              <Link href="/pricing">Pricing</Link>
            </li> */}
            <li className="text-md mx-3 font-semibold text-blue-500 hover:text-white">
              <Link href="/calculator">Calculator</Link>
            </li>
            <li className="text-md mx-3 font-semibold text-blue-500 hover:text-white">
              <Link href="/pricing">Booking</Link>
            </li>
            {
              user ? <li className="text-md mx-3 font-semibold text-blue-500 hover:text-white">
                <Link href="/job">Job</Link>
              </li> : ""
            }

            <li className="text-md mx-3 font-semibold text-blue-500 hover:text-white">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user && <Notifications />}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <div className="avatar">
                    <div className="rounded-full border-[3px] border-blue-600">
                      <Image
                        alt="image"
                        src={user?.photoURL}
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={avatar}
                    height={50}
                    width={50}
                    alt="avatar"
                  ></Image>
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
                  onClick={handleLogOut}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
