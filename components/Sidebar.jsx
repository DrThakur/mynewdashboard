import Link from "next/link";
import React from "react";
import Image from "next/image";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
// import { MdDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Sidebar = ({}) => {
  return (
    <div className="flex">
      <div className="fixed w-[264px]  h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
              {/* <MdDashboard size={20} /> */}
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-100 w-full h-4"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
              {/* <MdDashboard size={20} /> */}
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <RxPerson size={20} />
              {/* <MdDashboard size={20} /> */}
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
              {/* <MdDashboard size={20} /> */}
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <FiSettings size={20} />
              {/* <MdDashboard size={20} /> */}
            </div>
          </Link>
        </div>
      </div>

      <main className="ml-[264px] w-full"></main>
    </div>
  );
};

export default Sidebar;
