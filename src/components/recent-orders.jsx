import React from "react";
import { GoDotFill } from "react-icons/go";
import bottle from "../assets/images/bottle.jpg";
import shoe from "../assets/images/shoe.jpg";
import headphone from "../assets/images/headphone.jpg";
import iphone from "../assets/images/iphone.jpg";
import bag from "../assets/images/bag.jpg";

function RecentOrders() {
  // Sample order data
  const orders = [
    {
      id: 1,
      product: "Water Bottle",
      image: bottle,
      customer: "Peterson Jack",
      orderId: "#8441573",
      date: "27 Jun 2024",
      status: "Pending",
      statusColor: "text-yellow-400",
      bgColor: "bg-yellow-100"
    },
    {
      id: 2,
      product: "Running Shoes",
      image: shoe,
      customer: "Alice Smith",
      orderId: "#8441574",
      date: "28 Jun 2024",
      status: "Pending",
      statusColor: "text-yellow-400",
      bgColor: "bg-yellow-100"
    },
    {
      id: 3,
      product: "Wireless Headphones",
      image: headphone,
      customer: "John Doe",
      orderId: "#8441575",
      date: "29 Jun 2024",
      status: "Shipped",
      statusColor: "text-green-400",
      bgColor: "bg-green-100"
    },
    {
      id: 4,
      product: "iphone 15 pro",
      image: iphone,
      customer: "John Doe",
      orderId: "#8441556",
      date: "29 Sep 2024",
      status: "Canceled",
      statusColor: "text-red-400",
      bgColor: "bg-red-100"
    },
    {
      id: 5,
      product: "Blue Backpack",
      image: bag,
      customer: "John Doe",
      orderId: "#8441575",
      date: "10 Dec 2024",
      status: "Shipped",
      statusColor: "text-green-400",
      bgColor: "bg-green-100"
    },
    {
    id: 6,
    product: "Water Bottle",
    image: bottle,
    customer: "Peterson Jack",
    orderId: "#8441573",
    date: "27 Jun 2024",
    status: "Pending",
    statusColor: "text-yellow-400",
    bgColor: "bg-yellow-100"
    },
    {
        id: 7,
        product: "Water Bottle",
        image: bottle,
        customer: "Peterson Jack",
        orderId: "#8441573",
        date: "27 Jun 2024",
        status: "Pending",
        statusColor: "text-yellow-400",
        bgColor: "bg-yellow-100"
        },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="font-medium">Recent Orders</h1>
        <button className="px-3 py-2 text-sm text-blue-500 rounded-lg border border-gray-300 hover:bg-gray-50">
          View All
        </button>
      </div>
      
      <div className="bg-gray-400 h-[1px]"></div>
      
      {/* Container with overflow for vertical scrolling */}
      <div className="overflow-y-auto max-h-[340px] md:max-h-[400px]">
        <table className="w-full min-w-[600px]">
          <thead className="sticky top-0 bg-white text-left border-b border-gray-200 z-10">
            <tr>
              <th className="py-3 pl-3 text-start text-sm sm:text-base">Product</th>
              <th className="py-3 text-start text-sm sm:text-base">Customer</th>
              <th className="py-3 text-start text-sm sm:text-base">Order ID</th>
              <th className="py-3 text-start text-sm sm:text-base">Date</th>
              <th className="py-3 pr-3 text-start text-sm sm:text-base">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-3 pl-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={order.image} 
                      alt={order.product} 
                      className="w-10 h-10 rounded object-cover"
                    />
                    <p className="text-xs sm:text-sm">{order.product}</p>
                  </div>
                </td>
                <td className="py-3 text-xs sm:text-sm">{order.customer}</td>
                <td className="py-3 text-xs sm:text-sm">{order.orderId}</td>
                <td className="py-3 text-xs sm:text-sm">{order.date}</td>
                <td className="py-3 text-xs sm:text-sm pr-3">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full w-max ${order.bgColor}`}>
                    <GoDotFill className={`w-3 h-3 ${order.statusColor}`}/>
                    <span className={`text-xs ${order.statusColor}`}>{order.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RecentOrders;
