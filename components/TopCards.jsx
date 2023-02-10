import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TopCards = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4 p-4">
        <div className="lg:col-2 col-1 bg-white flex justify-between w-full border p-4 rounded-2xl shadow-[0_20px_27px_rgba(0,0,0,0.5)] ">
          <div className="flex flex-col w-full pb-4">
            <p className="text-gray-400">Fiat Balance </p>
            <p className="text-2xl font-bold">$7,867</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg">
            {/* <span className="text-green-700 text-lg">+18%</span> */}
            <Image
              src="../Group1.svg"
              alt="wallet-icon"
              width={60}
              height={60}
            />
          </p>
        </div>
        <div className="lg:col-2 col-1 bg-white flex justify-between w-full border p-4 rounded-2xl shadow-[0_20px_27px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col w-full pb-4 ">
            <p className="text-gray-400 ">Crypto Balance </p>
            <p className="text-2xl font-bold">$1,437,867</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg">
            <Image
              src="../Group1.svg"
              alt="wallet-icon"
              width={60}
              height={60}
            />
          </p>
        </div>
        <div className="lg:col-2 col-1 row-span-2 bg-white flex justify-between w-full border p-4 rounded-2xl shadow-[0_20px_27px_rgba(0,0,0,0.5)] ">
          {/* <div className="flex flex-col w-full pb-4">
            <p className="text-gray-400">Daily Revenue </p>
            <p className="text-2xl font-bold">$7,867</p>
          </div>
          <p className="flex justify-center items-center p-2 rounded-lg">
            <Image
              src="../Group2.svg"
              alt="wallet-icon"
              width={60}
              height={60}
            />
            
          </p> */}
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="lg:col-2 col-1 bg-white flex justify-between w-full border p-4 rounded-2xl shadow-[0_20px_27px_rgba(0,0,0,0.5)] ">
          <div className="flex flex-col w-full pb-4">
            <p className="text-gray-400">Receivble </p>
            <p className="text-2xl font-bold">$7,867</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg ">
            <Image
              src="../Group2.svg"
              alt="wallet-icon"
              width={60}
              height={60}
            />
          </p>
        </div>
        <div className="lg:col-2 col-1 bg-white flex justify-between w-full border p-4 rounded-2xl shadow-[0_20px_27px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col w-full pb-4">
            <p className="text-gray-400">Payables</p>
            <p className="text-2xl font-bold">$1,437,867</p>
          </div>
          <p className=" flex justify-center items-center p-2 rounded-lg">
            <Image
              src="../Group3.svg"
              alt="wallet-icon"
              width={60}
              height={60}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default TopCards;
