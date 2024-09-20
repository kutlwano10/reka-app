"use client";

import React from "react";
import { useCart } from "../components/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="container mt-28 mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <ul className="mb-8">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-4 border-gray-200"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <p className="text-lg font-medium">{item.title}</p>
                    <p className="text-gray-500">Size: {item.size}</p>
                    <p className="text-gray-500">Color: {item.color}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-lg">R{item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="w-12 ml-4 text-center border border-gray-300 rounded-md"
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  />
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

          {/* Cart Summary */}
          <div className="border-t pt-4 border-gray-200">
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="mt-6 w-full bg-[#87e64b] text-white py-3 rounded-md hover:bg-[#2a4b15]">
            Checkout
          </button>

          <Link
            href="/"
            className="block text-center text-gray-600 hover:underline mt-4"
          >
            Continue Shopping
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
