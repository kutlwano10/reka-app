"use client";
import React from "react";
import { useCart } from "../CartContext";
import Link from "next/link";

const CartModal = ({isOpen, onClose}) => {
  const { cartItems, removeFromCart } = useCart();
    if (!isOpen) return null;

  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-80 h-full p-4 shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-semibold"
          >
            ×
          </button>
        </div>

        <div className="cart-page">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center mb-4 p-2 border-b border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div className="w-2/3">
                    <p className="font-medium text-lg">{item.title}</p>
                    <p className="text-gray-500">R {item.price}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-gray-400 hover:text-gray-600"
                    >
                      🗑
                    </button>

                    
                  </div>
                </li>
                
              ))}
            </ul>

            
          )}

           {/* Cart Summary */}
           <div className="border-t pt-4 border-gray-200">
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>R{calculateTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          <Link
            href="/"
            onClick={onClose}
            className="block mt-6 text-center text-gray-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="mt-4">
          <Link href="/cart">
            <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300">
              View my cart ({cartItems.length})
            </button>
          </Link>
          <button className="w-full bg-[#87e64b] text-white py-2 rounded-md mt-4 hover:bg-[#2a4b15]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
