'use client'
import React from 'react'
import { useCart } from "../CartContext";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function AddToCart(props) {

    const { title, description, images, price, category, _id } = props;
    const { addToCart } = useCart();

    // Handle adding product to cart
    const handleAddToCart = () => {
      const product = {
        id: _id,
        title,
        price,
        image: images,
      };
      addToCart(product);
    };



  return (
    <button onClick={handleAddToCart} className="flex-1 bg-[#87e64b] hover:bg-[#2a4b15] text-white py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
    <FaShoppingCart className="mr-2" />
    Add to Cart
  </button>
  )
}




