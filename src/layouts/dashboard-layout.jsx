import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useState, useEffect } from "react";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileNavbar, setShowProfileNavbar] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleShowNavbar = () => {
    setShowProfileNavbar(!showProfileNavbar);
    console.log("clkicked",showProfileNavbar)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar menu={isOpen} onClose={handleCloseMenu} />
      <div className="ml-0 lg:ml-64 flex flex-col overflow-y-auto w-full">
        {/* Navbar */}
        <Navbar handleMenuIcon={handleToggleMenu} handleShowNavbar={handleShowNavbar} showProfileNavbar={showProfileNavbar} setShowProfileNavbar={setShowProfileNavbar}/>
        <main className="flex-1 overflow-y-auto mt-[90px] w-full">
          <Outlet />
        </main>
      </div>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[600] lg:hidden bg-black/40 transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
        onClick={handleCloseMenu}
      ></div>
    </div>
  );
}

export default DashboardLayout;
