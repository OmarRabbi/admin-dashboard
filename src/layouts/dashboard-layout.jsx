import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useState } from "react";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileNavbar, setShowProfileNavbar] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      {/* Fixed Sidebar */}
      <Sidebar menu={isOpen} onClose={handleCloseMenu} />

      {/* Main Content Area */}
      <div
        className="ml-0 lg:ml-64 flex flex-col overflow-y-auto w-full"
      >
        {/* Navbar */}
        <Navbar handleMenuIcon={handleToggleMenu} />
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto mt-[90px] w-full">
          {/* This will allow the main content to scroll beneath the sticky navbar */}
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseMenu}
      ></div>
    </div>
  );
}

export default DashboardLayout;
