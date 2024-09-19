import React from 'react';
import { useCart } from "../components/CartContext";
import Link from 'next/link';

const CartModal = () => {
    const { cartItems, removeFromCart } = useCart(); 
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
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
        <Link href="/">Continue Shopping</Link>
      </div>
    );
  };
  

export default CartModal;