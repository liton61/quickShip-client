"use client";

import { AuthContext } from "@/app/auth/page";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import logo from "../../../../public/Logo (1).json";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
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
                <details>
                  <summary>Dashboard</summary>
                  <ul className="p-2">
                    <li><Link href="/pricing">Book Parcel</Link></li>
                    <li><Link href="/return">Return Parcel</Link></li>
                    <li><Link href="/">Exchange Parcel</Link></li>
                    <li><Link href="/">My Parcels</Link></li>
                    <li><Link href="/review">Add Review</Link></li>
                  </ul>
                </details>
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
            <li>
              <details>
                <summary className="text-md mx-3 font-semibold text-blue-500">Dashboard</summary>
                <ul className="p-2">
                  <li><Link href="/pricing">Book Parcel</Link></li>
                  <li><Link href="/return">Return Parcel</Link></li>
                  <li><Link href="/">Exchange Parcel</Link></li>
                  <li><Link href="/">My Parcels</Link></li>
                  <li><Link href="/review">Add Review</Link></li>
                </ul>
              </details>
            </li>
            {/* <li className="text-md mx-3 font-semibold text-blue-500">
              <Link href="/dashboard">Dashboard</Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="rounded-full border border-blue-600">
                  <Image alt="" src={user?.photoURL} width={50} height={50} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 font-semibold"
              >
                <li>
                  <p className="justify-between text-black">
                    {user?.displayName}
                  </p>
                </li>
                <li>
                  <p className="text-black">{user?.email}</p>
                  <p>
                    <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
                  </p>
                </li>
                <li className="text-red-600">
                  <Link onClick={handleSignOut} href="/login">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login">
              <button className="btn font-bold btn-neutral">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
