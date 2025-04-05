import React, { useState, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import ApexChart from "../components/chart";
import { BsThreeDots } from "react-icons/bs";
import shoe from "../assets//images/shoe.jpg";
import bag from "../assets/images/bag.jpg";
import bottle from "../assets/images/bottle.jpg";
import iphone from "../assets/images/iphone.jpg";
import headphone from "../assets/images/headphone.jpg";
import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";
import profile4 from "../assets/images/profile-4.jpg";
import profile5 from "../assets/images/profile-5.jpg";
import profile6 from "../assets/images/profile-6.jpg";
import RecentOrders from "../components/recent-orders";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const selectRef = useRef(null);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);
  const handleChange = (e) => setSelectedYear(e.target.value);

  const dashboardCards = [
    {
      id: 1,
      bgColor: "bg-red-200",
      title: "Ecommerce Revenue",
      value: "$245,450",
      percentage: "14.9%",
      percentageColor: "text-green-600",
      arrowIcon: (
        <IoMdArrowDropup className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
      ),
      secondaryPercentage: "(+43.21%)",
    },
    {
      id: 2,
      bgColor: "bg-green-200",
      title: "Total Orders",
      value: "1,245",
      percentage: "8.2%",
      percentageColor: "text-green-600",
      arrowIcon: (
        <IoMdArrowDropup className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
      ),
      secondaryPercentage: "(+12.5%)",
    },
    {
      id: 3,
      bgColor: "bg-red-200",
      title: "New Customers",
      value: "668",
      percentage: "-8.6%",
      percentageColor: "text-red-600",
      arrowIcon: (
        <IoMdArrowDropdown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
      ),
      secondaryPercentage: "(+12.5%)",
    },
    {
      id: 4,
      bgColor: "bg-yellow-200",
      title: "Repeat Purchase Rate",
      value: "75.12%",
      percentage: "25.4%",
      percentageColor: "text-green-600",
      arrowIcon: (
        <IoMdArrowDropup className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
      ),
      secondaryPercentage: "(+20.11%)",
    },
    {
      id: 5,
      bgColor: "bg-pink-200",
      title: "New Customers",
      value: "668",
      percentage: "-8.6%",
      percentageColor: "text-red-600",
      arrowIcon: (
        <IoMdArrowDropdown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
      ),
      secondaryPercentage: "(+12.5%)",
    },
  ];

  const topSellingProducts = [
    {
      id: 1,
      name: "Snicker Vento",
      productId: "241310",
      image: shoe,
      sales: 128,
    },
    {
      id: 2,
      name: "Running Pro",
      productId: "241311",
      image: bag,
      sales: 98,
    },
    {
      id: 3,
      name: "Casual Walk",
      productId: "241312",
      image: bottle,
      sales: 75,
    },
    {
      id: 4,
      name: "Basketball Elite",
      productId: "241313",
      image: iphone,
      sales: 62,
    },
    {
      id: 5,
      name: "Trail Master",
      productId: "241314",
      image: headphone,
      sales: 54,
    },
    {
      id: 6,
      name: "Snicker Vento",
      productId: "241310",
      image: shoe,
      sales: 128,
    },
    {
      id: 7,
      name: "Running Pro",
      productId: "241311",
      image: bag,
      sales: 98,
    },
    {
      id: 8,
      name: "Casual Walk",
      productId: "241312",
      image: bottle,
      sales: 75,
    },
    {
      id: 9,
      name: "Basketball Elite",
      productId: "241313",
      image: iphone,
      sales: 62,
    },
    {
      id: 10,
      name: "Trail Master",
      productId: "241314",
      image: headphone,
      sales: 54,
    },
  ];

  const weeklyTopCustomers = [
    {
      id: 1,
      name: "Snicker Vento",
      customerId: "241310",
      image: profile1,
      sales: 128,
    },
    {
      id: 2,
      name: "Running Pro",
      customerId: "241311",
      image: profile2,
      sales: 98,
    },
    {
      id: 3,
      name: "Casual Walk",
      customerId: "241312",
      image: profile3,
      sales: 75,
    },
    {
      id: 4,
      name: "Basketball Elite",
      customerId: "241313",
      image: profile4,
      sales: 62,
    },
    {
      id: 5,
      name: "Trail Master",
      customerId: "241314",
      image: profile5,
      sales: 54,
    },
    {
      id: 6,
      name: "Snicker Vento",
      customerId: "241310",
      image: profile6,
      sales: 128,
    },
    {
      id: 7,
      name: "Running Pro",
      customerId: "241311",
      image: profile2,
      sales: 98,
    },
    {
      id: 8,
      name: "Casual Walk",
      customerId: "241312",
      image: profile5,
      sales: 75,
    },
    {
      id: 9,
      name: "Basketball Elite",
      customerId: "241313",
      image: profile1,
      sales: 62,
    },
    {
      id: 10,
      name: "Trail Master",
      customerId: "241314",
      image: profile3,
      sales: 54,
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="flex gap-4 items-center justify-between flex-col sm:flex-row">
        <div className="flex flex-col">
          <h1 className="text-base">Welcome Back, Omar Rabbi</h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Here's what's happening with your store today
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-fit">
            <select
              ref={selectRef}
              className="px-4 py-2 pr-8 appearance-none outline-none bg-slate-950 text-gray-50 rounded-lg"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              value={selectedYear}
            >
              <option value="" disabled>
                Previous Year
              </option>
              {Array.from({ length: 10 }, (_, i) => {
                const year = new Date().getFullYear() - i - 1;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            {!selectedYear && (
              <IoIosArrowUp
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-50 transition-transform duration-200 ${
                  isOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            )}
          </div>
          <button className="px-4 py-2 bg-slate-900 text-gray-50 rounded-lg">
            View All Time
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {dashboardCards.map((card) => (
          <div
            key={card.id}
            className={`rounded-lg p-3 ${card.bgColor} flex flex-col gap-6 justify-between`}
          >
            <div className="flex flex-col gap-1">
              <p className="font-light text-sm sm:text-base">{card.title}</p>
              <h1 className="font-semi-bold text-lg sm:text-xl">
                {card.value}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="px-3 py-1 rounded-full bg-gray-100 flex items-center">
                {card.arrowIcon}
                <p className={`text-xs ${card.percentageColor}`}>
                  {card.percentage}
                </p>
              </div>
              <div className="px-3 py-1 rounded-full">
                <p className={`text-xs`}>{card.secondaryPercentage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* summary & selling product section */}
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-6">
        <div className="basis-[65%] p-3 border border-gray-300 rounded-lg">
          <ApexChart />
        </div>
        <div className="basis-[35%] p-3 border border-gray-300 rounded-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h1>Most Selling Products</h1>
            <BsThreeDots className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-[380px]">
            <div className="flex flex-col gap-4 pr-2">
              {topSellingProducts.map((product) => (
                <div key={product.id} className="flex justify-between gap-2 flex-wrap">
                  <div className="flex gap-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base">{product.name}</h3>
                      <p className="text-xs text-gray-500">
                        ID: {product.productId}
                      </p>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-lg border border-gray-300 h-min shrink-0">
                    <p className="text-sm">{product.sales} sales</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* recent order & top customer section */}
      <div className="flex flex-col-reverse xl:flex-row gap-4 xl:gap-6">
        <div className="basis-[65%] border border-gray-300 rounded-lg">
          <RecentOrders/>
        </div>
        <div className="basis-[35%] p-3 border border-gray-300 rounded-lg flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h1>Weekly Top Customers</h1>
            <BsThreeDots className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 overflow-y-auto max-h-[300px] xl:max-h-[380px]">
            <div className="flex flex-col gap-4 pr-2">
              {weeklyTopCustomers.map((customer) => (
                <div key={customer.id} className="flex justify-between gap-2">
                  <div className="flex gap-2">
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <h3>{customer.name}</h3>
                      <p className="text-xs text-gray-500">
                        {customer.sales} Orders
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-2 cursor-pointer rounded-lg border border-gray-300 h-min shrink-0">
                    <p className="text-sm text-blue-500">view</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
