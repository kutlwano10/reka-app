"use client"
// components/SellersLayout.js
import Link from "next/link";
import Image from "next/image";
import search from "../public/search.svg";
import profile from "../public/profile.svg";
import dashboard from "../public/dashboard.svg";
import menu from "../public/menu-3.svg"
import { MdSettings, MdSpaceDashboard } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { HiCash } from "react-icons/hi";

const SellerLayout = ({ children }) => {
  const handleSidebar = () => {
    const dropDown = document.getElementById("sidebar");
    dropDown.classList.contains("hidden")
      ? dropDown.classList.remove("hidden")
      : dropDown.classList.add("hidden");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Image onClick={handleSidebar} className="absolute flex top-7" src={menu} alt="" />
      {/* Sidebar */}
      <div id="sidebar" className="hidden">
          <aside  className="flex-[2]  flex h-screen bg-gray-50 shadow-lg  flex-col p-6">
            {/* Logo */}
            <Link
              href="/sell"
              className=" text-blue-600 font-extrabold text-3xl md:text-4xl mb-10"
            >
              Reka
            </Link>
            {/* Sidebar Links */}
            <nav className="flex flex-col gap-6 text-gray-700">
              <Link href="/sell/dashboard" className="flex items-center space-x-2">
                <MdSpaceDashboard size={30}/>
                <span>Dashboard</span>
              </Link>
              <Link href="/sell/products" className="flex items-center space-x-2">
                <HiMiniShoppingBag size={30} />
                <span>Products</span>
              </Link>
              <Link href="/sell/orders" className="flex items-center space-x-2">
                <FaCartShopping size={30} />
                <span>Orders</span>
              </Link>
              <Link href="/sell/customers" className="flex items-center space-x-2">
                <IoPeople size={30} />
                <span>Customers</span>
              </Link>
              <Link href="/sell/reports" className="flex items-center space-x-2">
                <BsBarChartFill size={30} />
                <span>Statistics</span>
              </Link>
              <Link href="/sell/reviews" className="flex items-center space-x-2">
                <MdReviews size={30} />
                <span>Reviews</span>
              </Link>
              <Link
                href="/sell/transaction"
                className="flex items-center space-x-2"
              >
                <HiCash size={30} />
                <span>Transactions</span>
              </Link>
              <Link href="/sell/settings" className="flex items-center space-x-2">
                <MdSettings size={30} />
                <span>Settings</span>
              </Link>
            </nav>
          </aside>
      </div>

      {/* Main Content Area */}
      <main className=" flex-[3] bg-white pb-20 p-2">
        {/* Header */}
        <header className="  h-16 mb-10 bg-white  flex justify-between items-center px-6 ">
          {/* Search Bar */}
          <div className="flex items-center space-x-2 w-1/2">
            <input
              className="rounded-full p-2 w-full border border-gray-300"
              type="text"
              placeholder="Search..."
            />
          </div>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={profile}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
            </div>
            <div className="text-gray-700">
              <p>John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className=" overflow-y-auto h-full flex md:px-6 flex-col bg-[#fafafa] ">
          {children}
        </div>
      </main>
    </div>
  );
};

export default SellerLayout;
