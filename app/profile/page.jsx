'use client'
import React, { useState } from 'react';

const BuyerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    address: '123 Main Street, City, Country',
  });

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  const handleSave = () => setIsEditing(false);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      
      {/* Profile Section */}
      <div className="border-black border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full p-2 border-black border rounded bg-blue-100"
              />
            ) : (
              <p>{profile.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full p-2 border-black border rounded bg-blue-100"
              />
            ) : (
              <p>{profile.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full p-2 border-black border rounded bg-blue-100"
              />
            ) : (
              <p>{profile.address}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          {isEditing ? (
            <button onClick={handleSave} className="bg-blue-700 text-white px-4 py-2 rounded">Save</button>
          ) : (
            <button onClick={handleEdit} className="bg-gray-500 text-white px-4 py-2 rounded bg-blue-700">Edit Profile</button>
          )}
        </div>
      </div>

      {/* Orders Section */}
      <div className="border-black border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <p>You have no recent orders.</p>
      </div>

      {/* Payment Section */}
      <div className="border-black border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
        <p>No payment methods added yet.</p>
        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">Add Payment Method</button>
      </div>

      {/* Security Settings Section */}
      <div className="border-black border p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
        <p>To reset your password, click below.</p>
        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">Reset Password</button>
      </div>
    </div>
  );
};

export default BuyerProfile;


