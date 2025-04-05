import React from "react";
import { FaShopify } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { MdOutlineInventory } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoSettingsOutline, IoHelpOutline, IoPeopleOutline, IoLogOutOutline } from "react-icons/io5";

function Sidebar({menu, onClose}) {
  // Navigation items data
  const navItems = [
    {
      section: "GENERAL",
      items: [
        { icon: <RxDashboard className="w-6 h-6 shrink-0" />, label: "Dashboard" },
        { icon: <AiOutlineShopping className="w-6 h-6 shrink-0" />, label: "Product" },
        { icon: <MdOutlineInventory className="w-6 h-6 shrink-0" />, label: "Inventory" },
        { icon: <FaRegStar className="w-6 h-6 shrink-0" />, label: "Review" },
      ]
    },
    {
      section: "ACCOUNT",
      items: [
        { icon: <IoSettingsOutline className="w-6 h-6 shrink-0" />, label: "Settings" },
        { icon: <IoHelpOutline className="w-6 h-6 shrink-0" />, label: "Help" },
        { icon: <IoPeopleOutline className="w-6 h-6 shrink-0" />, label: "Manage Users" }
      ]
    }
  ];
  return (
    <div className={`fixed h-screen top-0 bottom-0 text-white w-64 h-full p-8 bg-slate-900 text-gray-50 -translate-x-64 lg:translate-x-0 lg:flex flex-col justify-between transition-all duration-500 z-[100] ${menu ? "translate-x-0.5" : "-translate-x-64"}`}>
      <div className="flex flex-col gap-8 w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaShopify className="w-6 h-6" />
            <p>S-grocery</p>
          </div>
          <IoClose className={`w-6 h-6 cursor-pointer`} onClick={onClose}/>
        </div>

        {/* Sections */}
        {navItems.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className={`text-gray-400`}>{section.section}</h2>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-4 hover:text-white cursor-pointer">
                {item.icon}
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="w-full flex items-center gap-2 hover:text-white cursor-pointer">
        <IoLogOutOutline className="w-6 h-6 shrink-0" />
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;