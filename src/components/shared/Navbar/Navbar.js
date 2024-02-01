"use client";

import Lottie from "lottie-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../../public/Logo (1).json";
import Image from "next/image";
import useAuth from "@/components/hooks/useAuth";



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
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
  const navLink = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/service">Service</Link>
      </li>
      <li>
        <Link href="/price">Booking</Link>
      </li>
      <li>
        <Link href="/calculator">Calculator</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="container m-auto">
      <div
        className="navbar container m-auto shadow-lg shadow-[#60a5fa]"
        style={{
          position: "fixed",
          backgroundColor: isScrolled ? "#FFFFFF" : "transparent",
          borderRadius: isScrolled ? "999px" : "999px",
          zIndex: 1000,

        }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-stone-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-44 justify-center items-center">
              <span>
                <Lottie animationData={logo}></Lottie>
              </span>
            </button>
            <p className="font-serif font-semibold italic text-2xl " style={{
                textShadow:"2px 1px 2px",
              }}>
              <span className="text-blue-500 -ml-10 ">Quick Ship</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-blue-500 text-lg">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <details className="dropdown">
              <summary className="btn btn-ghost m-1">
                <div>
                  <div tabIndex={0}>
                    {user?.photoURL ? (
                      <div className="avatar">
                        <div className="w-12 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                          <div className="rounded-full border-ring border-blue-600">
                            <Image
                              alt="nai"
                              src={user?.photoURL}
                              width={50}
                              height={50}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <FaUserCircle className="text-4xl hidden"></FaUserCircle>
                    )}
                  </div>
                </div>
              </summary>

              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[10] bg-base-200 rounded-box w-30 -ml-16 md:w-36"
              >
                <li>
                  <p className="font-semibold">{user?.displayName}</p>
                </li>
                <li>
                  <Link href="/dashboard" className="font-semibold">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-500 text-white font-semibold"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </details>
          ) : (
            ""
          )}
          {user ? (
            ""
          ) : (
            <Link href={"/login"}>
              <button className="btn bg-blue-500 font-bold m-1 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="hidden md:inline">
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
