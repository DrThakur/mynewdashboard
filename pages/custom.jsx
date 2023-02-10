import React from "react";
import {
  BsPersonFill,
  BsThreeDotsVertical,
  BsPersonCircle,
} from "react-icons/bs";
import { data } from "@/data/data";
import { RiInformationLine } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TopCards from "@/components/TopCards";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";
import Image from "next/image";
import Link from "next/link";

const Custom = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4 bg-white text-lg ">
        <h2 className="font-bold">Customer</h2>
        <div className="flex flex-row items-center justify-center ">
          <BsPersonCircle size={20} />
          <Link href="/customers">
            <h2 className="font-thin p-2">Ankit Kumar</h2>
          </Link>
          <Image src="../bell.svg" alt="bell-icon" width={30} height={30} />
        </div>
      </div>
      <div className="bg-purple-800 text-white flex flex-row rounded-lg items-center p-4  justify-around ">
        <RiInformationLine size={30} />
        <div className="flex flex-col justify-start">
          <span>Plese complete the KYC.</span>
          <span className="text-sm">
            Please follow the instructions in the email to complete account
            verification. Make sure to check your promotions/spam as well.
          </span>
        </div>
        <AiOutlineCloseCircle size={20} />
      </div>
      {/* <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4">
                    {order.name.first + " " + order.name.last}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {order.name.first}@gmail.com
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <main className="w-full">
        {children}

        <TopCards />
        {/* <Sidebar /> */}
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </div>
  );
};

export default Custom;
