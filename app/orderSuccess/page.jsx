'use client'
import React from 'react'
import { useCart } from "../CartContext";

export default function page() {

    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg w-full">
    <div className="flex flex-col items-center">
      <div className="bg-green-500 rounded-full p-4">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4m5-2a9 9 0 11-9-9"></path>
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">Order Successful!</h2>
    </div>

    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700">Order Summary</h3>
      <div className="flex justify-between mt-2 text-gray-600">
        <span>Order Number:</span>
        <span>#12345678</span>
      </div>
      <div className="flex justify-between mt-2 text-gray-600">
        <span>Total Amount:</span>
        <span>{calculateTotalPrice().toFixed(2)}</span>
      </div>
    </div>

    <div className="mt-6 text-center">
      <a href="/" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-500 transition duration-200">
        Continue Shopping
      </a>
    </div>
  </div>
</div>

  )
}
