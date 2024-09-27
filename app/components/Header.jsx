"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cart from "../public/cart.svg";
import menu from "../public/menu-4.svg";
import search from "../public/search.svg";
import dashboard from "../public/dashboard.svg";
import Footer from "./Footer";
import Modal from "./CartModal";
import { useCart } from "../CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const toggleNavbar = () => {
    const dropDown = document.getElementById("navbar-dropdown");
    dropDown.classList.contains("hidden")
      ? dropDown.classList.remove("hidden")
      : dropDown.classList.add("hidden");
  };

  
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className=" w-full fixed top-0 bg-white shadow-md z-10">
        <nav className="flex justify-between items-center  px-4 md:p-[8%] py-3 md:py-6">
          <Image onClick={toggleNavbar} className="w-7" src={menu} alt="" />

          <Link
            href="/"
            className="pl-8 text-[#87e64b] font-extrabold text-3xl  md:text-5xl"
          >
            Reka
          </Link>

          <div className=" flex items-center  md:gap-4">
            {/* Login */}
            <Link href="">
              <Image className=" w-6" src={search} alt="" />
            </Link>
          
              <Image className=" w-8" src={dashboard} alt="" />
            
            {/* cart */} 
            <button onClick={toggleCart} className="relative cursor-pointer">
            {totalItemsInCart > 0 && (
              <div className="t-0 absolute left-3 -top-0">
                <p className="flex h-2 w-2 items-center  justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {totalItemsInCart}
                </p>
              </div>
              )},
              <Image className="w-7 relative -top-3" src={cart} alt="" />
            </button>
          </div>
        </nav>
        {/* Menu sidebar */}
        <div className="w-full hidden " id="navbar-dropdown">
          <Footer/>
        </div>
          {/* Cart Modal */}
          <Modal isOpen={isCartOpen} onClose={toggleCart} />
      </header>
    </>
  );
};

export default Header;
