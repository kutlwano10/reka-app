"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create CartContext
const CartContext = createContext();

// CartProvider component to wrap your app and provide cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add an item to the cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  // Provide state and functions to children components
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
