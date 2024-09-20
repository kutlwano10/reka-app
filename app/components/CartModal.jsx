import React from 'react';
import { useCart } from "../components/CartContext";
import Link from 'next/link';

const CartModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    const { cartItems, removeFromCart } = useCart(); 
    return (


        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
        <div className="bg-white w-64 h-full p-4 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

      <div className="cart-page">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <p>{item.title}</p>
                  <p>Price: R{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Link href="/" on>Continue Shopping</Link>
      </div>
      <button>View cart</button>
      </div>
      </div>
    );
  };
  

export default CartModal;