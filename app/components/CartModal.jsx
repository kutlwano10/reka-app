import React from 'react';
import { useCart } from "../components/CartContext";
import Link from 'next/link';

const CartModal = ({isOpen, onClose}) => {
  const { cartItems, removeFromCart } = useCart(); 
    if (!isOpen) return null;

    
    return (


        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
        <div className="bg-white w-64 h-full p-4 shadow-lg overflow-y-auto">
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
              <li key={item.id} className="flex justify-between items-center mb-4 p-2 border-b border-gray-200">
                <div className="w-2/3">
                  <p className="font-medium text-lg">{item.title}</p>
                  <p className="text-[#87e64b]">Price: R{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}  className="mt-2 text-sm text-red-500 hover:underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Link href="/" className="block mt-6 hover:underline">Continue Shopping</Link>
      </div>
      <Link href="/cart">
      <button className="mt-4 w-full bg-[#87e64b] text-white py-2 rounded-md hover:bg-[#2a4b15]">View cart</button>
      </Link>
      </div>
     
      </div>
    );
  };
  

export default CartModal;