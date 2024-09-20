"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from 'next-cloudinary';

const addProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter()


  const  handleImageUpload = async(e) => {

    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'PresetNyana'); // unsigned preset

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log(data.url)
      setImages(data.url);  // The uploaded image URL
    } catch (err) {
      console.error(err);
    } 

  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!title || !category || !images || !price) {
      alert("Insert details");
      return
    }
 
// console.log(formData)
    try {
      console.log(images)
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "constent-type": "application/json",
        },
        body: JSON.stringify({ title, description,category, images, price }),
      });
      if(res.ok) {
        router.push("/sell/products")

      }else {
        throw new Error ("Failed to Create Product")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md  p-6 max-w-lg md:mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Create Product</h2>

      <label htmlFor="product-title" className="block font-medium mb-2">
        Product title
      </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        id="product-title"
        placeholder="Type here"
        className="w-full p-2 border rounded-md mb-4"
      />

      <label htmlFor="product-label" className="block font-medium mb-2">
        Label
      </label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        id="product-label"
        placeholder="Type here"
        className="w-full p-2 border rounded-md mb-4"
      />

      <label className="block font-medium mb-2">Images</label>
      <input type="file" onChange={handleImageUpload} />
    
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
        <label htmlFor="category-select" className="block font-medium mb-2">
        Category
      </label>
      <select
        id="category-select"
        className="w-full p-2 border rounded-md"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
      >
        <option value="">Select</option>
        <option value="Kasi Food">Kasi Food</option>
        <option value="Meat & Fish">Meat & Fish</option>
        <option value="Clean Water">Clean Water</option>
        <option value="Gardening">Gardening</option>
        <option value="Veg & Fruits">Veg & Fruits</option>
        <option value="Live Stock">Live Stock</option>
        <option value="Pets">Pets</option>
        <option value="Minerals">Minerals</option>
      </select>

      <p className="mt-2">Selected Category: {category}</p>
        </div>
      </div>

      <label htmlFor="price" className="block font-medium mb-2">
        Price
      </label>
      <div className="flex space-x-2 mb-4">
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
          id="price"
          placeholder="Type here"
          className="flex-1 p-2 border rounded-md"
        />
        <select className="p-2 border rounded-md">
          <option value="USD">R</option>
        </select>
      </div>

      <div className="flex items-center mb-4">
        <input type="checkbox" id="publish" className="mr-2" />
        <label htmlFor="publish" className="text-sm">
          Publish on site
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit item
      </button>
    </form>
  );
};

export default addProduct;
