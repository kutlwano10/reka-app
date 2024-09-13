// components/SellersLayout.js
import Link from "next/link";
import Image from "next/image";
import search from "../public/search.svg";
import profile from "../public/profile.svg";
import { MdSettings, MdSpaceDashboard } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { HiCash } from "react-icons/hi";

const SellerLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 left-0 fixed h-screen bg-gray-50 shadow-lg flex flex-col p-6">
        {/* Logo */}
        <Link
          href="/"
          className=" text-blue-600 font-extrabold text-3xl md:text-4xl mb-10"
        >
          Reka
        </Link>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6 text-gray-700">
          <Link href="/sell/dashboard" className="flex items-center space-x-2">
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link href="/sell/products" className="flex items-center space-x-2">
            <HiMiniShoppingBag />
            <span>Products</span>
          </Link>
          <Link href="/sell/orders" className="flex items-center space-x-2">
            <FaCartShopping />
            <span>Orders</span>
          </Link>
          <Link href="/sell/customers" className="flex items-center space-x-2">
            <IoPeople />
            <span>Customers</span>
          </Link>
          <Link href="/sell/reports" className="flex items-center space-x-2">
            <BsBarChartFill />
            <span>Statistics</span>
          </Link>
          <Link href="/sell/reviews" className="flex items-center space-x-2">
            <MdReviews className="" />

            <span>Reviews</span>
          </Link>
          <Link
            href="/sell/transaction"
            className="flex items-center space-x-2"
          >
            <HiCash />
            <span>Transactions</span>
          </Link>
          <Link href="/sell/settings" className="flex items-center space-x-2">
            <MdSettings />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1  bg-white p-2">
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow-lg flex justify-between items-center px-6 z-10 ">
          {/* Search Bar */}
          <div className="flex items-center space-x-2 w-1/2">
            <input
              className="rounded-full p-2 w-full border border-gray-300"
              type="text"
              placeholder="Search..."
            />
            <button className="p-2 bg-blue-500 text-white rounded-full">
              <Image className="w-6 h-6" src={search} alt="Search" />
            </button>
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
        <div className=" p-6 overflow-y-auto h-full ">{children}</div>
      </main>
    </div>
  );
};

export default SellerLayout;
