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
import RecentStocks from "@/components/RecentStocks";
import Image from "next/image";
import Link from "next/link";

const Custom = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4 bg-white text-lg ">
        <h2 className="font-bold">Dashboard</h2>
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

      <main className="w-full">
        {children}

        <TopCards />
        {/* <Sidebar /> */}
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentStocks />
        </div>
      </main>
    </div>
  );
};

export default Custom;
