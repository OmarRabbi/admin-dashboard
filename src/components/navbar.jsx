import React, { useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";

function Navbar({ handleMenuIcon, handleShowNavbar, showProfileNavbar, setShowProfileNavbar }) {
  const profileNavbarRef = useRef();
  const menuItems = [
    { id: "account", label: "My Account"},
    { id: "billing", label: "Billing Information"},
    { id: "payment", label: "Payment History"},
    { id: "logout", label: "Logout"},
  ];

  const handleItemClick = (id) => {
    // setActiveItem(id);
    setShowProfileNavbar(false);
  };

  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if (profileNavbarRef.current && !profileNavbarRef.current.contains(event.target)){
        setShowProfileNavbar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  },[])
  return (
    <div className="fixed top-0 z-[500] bg-gray-50 shadow-md p-5 w-full lg:w-[calc(100vw-256px)]">
      <header className="text-slate-900 flex max-[918px]:gap-4 gap-6 items-center max-[918px]:items-center justify-between">
        {/* Search Box */}
        <label className="hidden lg:flex items-center mr-auto gap-3 rounded-lg border border-white border-opacity-20 px-3 sm:px-6 py-3 w-full max-w-[412px] bg-slate-200">
          <IoSearch className="w-5 h-5 sm:w-6 sm:h-6" />
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none outline-none bg-inherit text-base font-Inter text-[#7D8592]"
          />
        </label>
        {/* Menu Icon */}
        <FiMenu className="w-5 h-5 sm:w-6 sm:h-6 block lg:hidden" onClick={handleMenuIcon}/>
          
        {/* Profile and Cart */}
        <div className="flex items-center max-[918px]:flex-row-reverse flex-row justify-end gap-6 w-full">
          <div className="flex items-center max-[918px]:w-full max-[918px]:justify-end">
            <div className="rounded-lg border border-white border-opacity-20 p-3 ">
              <MdOutlineShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="rounded-lg border border-white border-opacity-20 p-3">
              <FaRegBell className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="relative rounded-lg border bg-slate-900 text-gray-50 border-opacity-20 py-2.5 px-2 sm:px-4 flex items-center gap-1.5 sm:gap-3">
              <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full overflow-hidden shrink-0">
                <CgProfile className="w-full h-full object-cover" />
              </div>
              <div
                onClick={handleShowNavbar}
                className="flex items-center gap-1 cursor-pointer"
              >
                <p className="text-gray-50 font-Inter text-xs sm:text-sm lg:text-base shrink-0">
                  Omar Rabbi
                </p>
                <IoIosArrowUp
                  className={`cursor-pointer w-4 sm:w-5 h-4 sm:h-5 shrink-0 transition-all duration-300 ${
                    showProfileNavbar ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
              {/* Profile Navbar */}
              {showProfileNavbar && (
                <div
                  ref={profileNavbarRef}
                  className="z-[3000] w-full absolute left-0 top-[110%] right-0 flex flex-col gap-2 sm:gap-6 py-2.5 px-2 sm:p-4 text-light bg-[#050E13] border-[0.75px] border-white border-opacity-10 rounded-md h-max"
                >
                  {menuItems.map(({ id, label }) => (
                    <div
                      key={id}
                      onClick={() => handleItemClick(id)}
                      className="flex items-center gap-2 sm:gap-4 cursor-pointer"
                    >
                      <p
                        className={`text-sm sm:text-base font-semibold shrink-0 leading-6 text-gray-50
                        }`}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
