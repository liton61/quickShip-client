"use client";

import {
  FaChartPie,
  FaClipboardCheck,
  FaEnvelope,
  FaHome,
  FaListAlt,
  FaListUl,
  FaStar,
  FaUserAlt,
  FaUsers,
  FaWalking,
} from "react-icons/fa";

import React from "react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {

  //   const [isAdmin] = useAdmin();
  //   const [isDeliveryMan] = useDeliveryMan();

  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     navigate("/dashboard/statistics");
  //     if (isDeliveryMan) {
  //       navigate("/dashboard/myDelivery");
  //     }
  //     if (!isAdmin && !isDeliveryMan) {
  //       navigate("/dashboard/profile");
  //     }
  //   }, [navigate, isDeliveryMan, isAdmin]);

  return (
    <div className="flex">
      <div className="flex">
        <div
          style={{ backgroundImage: "url(https://i.ibb.co/J2q5qBj/img4.jpg)" }}
          className="w-40 md:w-72 min-h-screen bg-cover"
        >
          <h1 className="md:text-3xl mt-14 uppercase md:p-5 text-center text-black font-serif font-bold">
            Quick Ship
          </h1>

          <ul className="menu md:text-lg font-serif uppercase md:mt-24">
            <ul>
              <li className="text-black">
                <Link href="/dashboard/user">
                  <FaChartPie className="md:w-7 md:h-10"></FaChartPie>User
                </Link>
              </li>
              <li className="text-black">
                <Link href="/dashboard/admin">
                  <FaListUl className="md:w-7 md:h-10"></FaListUl>Admin
                </Link>
              </li>
              {/* <li className="text-black">
                <Link href="/dashboard/user">
                  <FaChartPie className="md:w-7 md:h-10"></FaChartPie>Statistics
                </Link>
              </li>
              <li className="text-black">
                <Link href="/">
                  <FaListUl className="md:w-7 md:h-10"></FaListUl>All Parcels
                </Link>
              </li>
              <li className="text-black">
                <Link href="/">
                  <FaWalking className="md:w-7 md:h-10"></FaWalking>All Delivery
                  Men
                </Link>
              </li>
              <li className="text-black">
                <Link href="/">
                  <FaUsers className="md:w-7 md:h-10"></FaUsers>All Users
                </Link>
              </li> */}
            </ul>
          </ul>
          <div className="divider divider-neutral"></div>
          <ul className="menu md:text-lg font-serif uppercase">
            <li className="text-black">
              <Link href="/">
                <FaHome className="md:w-7 md:h-10"></FaHome>Home
              </Link>
            </li>
            <li className="text-black">
              <Link href="/aboutUs">
                <FaEnvelope className="md:w-7 md:h-10"></FaEnvelope>contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
