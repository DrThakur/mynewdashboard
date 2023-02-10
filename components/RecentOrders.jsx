import React from "react";
import { data } from "data/data";
import { FaShoppingBag } from "react-icons/fa";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll shadow-[0_20px_27px_rgba(0,0,0,0.5)]">
      {/* <h1>Recent Orders</h1> */}
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="rounded-lg p-3">
              {order.status === "Profit" ? (
                <BsArrowUpRight className="text-green-900" />
              ) : (
                <BsArrowDownRight className="text-red-900" />
              )}
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold text-xs">
                {order.name.first + " " + order.name.last}
              </p>
              <p className="text-gray-400 text-sm">TFID: {order.TFID}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              ${order.total.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
