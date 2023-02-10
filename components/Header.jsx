import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import {
  MdDashboard,
  MdContacts,
  MdSwapHorizontalCircle,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FaFileInvoice } from "react-icons/fa";

const Header = ({ children }) => {
  return (
    <>
      <div className="flex mt-2">
        <div className="absolute w-[264px] h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="../Logo.svg"
              className="aboslute  mb-8"
              alt="Truffles-logo"
              width={166}
              height={28.25}
            />
            <Link href="/">
              <div className="flex flex-row items-center  hover:bg-gray-200 shadow-[0_25px_27px_rgba(0,0,0,0.5)]cursor-pointer my-4 p-3 rounded-lg">
                <div className="bg-purple-800 text-white p-3 rounded-lg flex items-center ">
                  <MdDashboard size={20} />
                </div>
                <span className="pl-2">Dashboard</span>
              </div>
            </Link>

            <Link href="/custom">
              <div className="flex flex-row items-center  hover:bg-gray-200 shadow-[0_25px_27px_rgba(0,0,0,0.5)]cursor-pointer my-4 p-3 rounded-lg">
                <div className="bg-white-800 text-gray p-3 rounded-lg flex items-center ">
                  <RxDashboard size={20} />
                </div>
                <span className="pl-2">Invoice</span>
              </div>
            </Link>
            <Link href="/customers">
              <div className="flex flex-row items-center  hover:bg-gray-200 shadow-[0_25px_27px_rgba(0,0,0,0.5)]cursor-pointer my-4 p-3 rounded-lg">
                <div className="bg-white-100 text-gray p-3 rounded-lg flex items-center">
                  <FaFileInvoice size={20} />
                </div>
                <span className="pl-2">Proforma</span>
              </div>
            </Link>
            <Link href="/business">
              <div className="flex flex-row items-center  hover:bg-gray-200 shadow-[0_25px_27px_rgba(0,0,0,0.5)]cursor-pointer my-4 p-3 rounded-lg">
                <div className="bg-white-100 text-gray p-3 rounded-lg flex items-center">
                  <MdSwapHorizontalCircle size={20} />
                </div>
                <span className="pl-2">Swap</span>
              </div>
            </Link>
            <Link href="/custom">
              <div className="flex flex-row items-center  hover:bg-gray-200 shadow-[0_25px_27px_rgba(0,0,0,0.5)]cursor-pointer my-4 p-3 rounded-lg">
                <div className="bg-white-100 text-gray p-3 rounded-lg flex items-center">
                  <FiSettings size={20} />
                </div>
                <span className="pl-2 text-right">Transfer</span>
              </div>
            </Link>
            <Link href="/custom">
              <div className="flex flex-row items-center  hover:bg-gray-200 shadow-[0_25px_27px_rgba(0,0,0,0.5)]cursor-pointer my-4 p-3 rounded-lg">
                <div className="bg-white-100 text-gray p-3 rounded-lg flex items-center">
                  <MdContacts size={20} />
                </div>
                <span className="pl-2">Contact</span>
              </div>
            </Link>
          </div>
        </div>

        <main className="ml-[264px] w-full">{children}</main>
      </div>
    </>
  );
};

export default Header;
