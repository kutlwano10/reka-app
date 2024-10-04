'use client'
import React, { useState } from 'react';
import { useCart } from "../CartContext";
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const route = useRouter();
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });
  
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleShippingChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {

    e.preventDefault()
    // Add logic to handle placing the order
    console.log('Order Placed:', {...shippingDetails, paymentMethod,cartItems});

    const fetchProductsData = async () => {
      // console.log('123')
      try {
        const response = await fetch(`https://reka-app-three.vercel.app/api/buy`, {method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
          body: JSON.stringify({...shippingDetails,paymentMethod,cartItems}), });
        if (!response.ok) {
          throw new Error("Failed to post buy request");
          
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("Error posting:", error);
      }
    };

    fetchProductsData(); // Re-fetch the products whenever the filter changes

    route.push('/orderSuccess')
  };

  return (
    <form onSubmit={(e)=>handlePlaceOrder(e)} className="max-w-7xl mx-auto relative p-4 bg-gray-200 top-24">
      <h1 className="text-3xl font-bold mb-6 text-[#2E7D32]">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Order Summary */}
        <div className="border border-black p-4 rounded bg-white">
          <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">Order Summary</h2>
          {
            cartItems.map((item,index) =>
              <div key={index} className="flex justify-between mb-4">
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
          </div> 
           )
          }

          <hr className="border-[#8D6E63] mb-4" />
          <div className="flex justify-between">
            <p className="font-bold">Total</p>
            <p className="font-bold">R{calculateTotalPrice().toFixed(2)}</p>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="border border-black p-4 rounded bg-white">
          <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">Shipping Details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-700">Full Name</label>
              <input
              required
                type="text"
                name="name"
                value={shippingDetails.name}
                onChange={handleShippingChange}
                className="w-full p-2 border rounded border-black bg-blue-100 text-black"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700">Address</label>
              <input
                required
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleShippingChange}
                className="w-full p-2 border rounded border-black bg-blue-100 text-black"
                placeholder="Enter your address"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-700">City</label>
                <input
                 required
                  type="text"
                  name="city"
                  value={shippingDetails.city}
                  onChange={handleShippingChange}
                  className="w-full p-2 border rounded border-black bg-blue-100 text-black"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-700">Postal Code</label>
                <input
                  required
                  type="text"
                  name="postalCode"
                  value={shippingDetails.postalCode}
                  onChange={handleShippingChange}
                  className="w-full p-2 border rounded border-black bg-blue-100 text-black"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700">Country</label>
              <input
                required
                type="text"
                name="country"
                value={shippingDetails.country}
                onChange={handleShippingChange}
                className="w-full p-2 border rounded border-black bg-blue-100 text-black"
                placeholder="Country"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border border-black p-4 rounded bg-white">
          <h2 className="text-xl font-semibold mb-4 text-[#5D4037]">Payment Method</h2>
          <select
            required
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded border-[#8D6E63] bg-blue-100 text-black"
          >
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash-on-delivery">Cash on Delivery</option>
          </select>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="mt-6 text-center">
        <button
          className="bg-green-700 text-white px-6 py-3 rounded hover:bg-[#388E3C]"
        >
          Place Order
        </button>
      </div>
    </form>
  );
};

export default Checkout;
