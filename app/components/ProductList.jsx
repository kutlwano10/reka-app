'use client'; // Add this to make the component client-side

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const filter = useSelector((state) => state.filter.filter); // Get filter state from Redux

  useEffect(() => {
    const fetchProductsData = async () => {
       await new Promise(resolve=>setTimeout(resolve,1000))
      try {
        const response = await fetch(`http://localhost:3000/api/products/?category=${filter}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products); // Set the fetched products to the state
      } catch (error) {
        console.log("Error loading products:", error);
      }
    };

    fetchProductsData(); // Re-fetch the products whenever the filter changes
  }, [filter]); // Trigger fetch when `filter` changes

  return (
    <div>
      <div>
        <div className=" px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product._id} {...product} />)
          ) : (
            <div className="min-h-screen flex justify-center items-center">
            <div className="flex justify-center items-center">
             
              {/* Tailwind CSS Spinner */}
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
          </div>
          )}
        </div>
      </div>
      <div className="w-full relative pb-10 text-center bottom-0">
        {/* You can add more buttons or pagination here */}
      </div>
    </div>
  );
};

export default ProductList;


