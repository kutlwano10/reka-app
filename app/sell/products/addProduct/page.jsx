"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from 'next-cloudinary';

const addProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      setImages(data.secure_url);  // The uploaded image URL
    } catch (err) {
      console.error(err);
    } 



    // console.log(result)
    // if (result && result.event === 'success') {
    //   setImages(result.info.secure_url);
    //   console.log('open')
    //   console.log(images)
    // }
    // console.log('lasthv')
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    // if (!title || !description|| !images || !price) {
    //   alert("Insert details");
    //   return
    // }
 
// console.log(formData)
    try {
      console.log(images)
      const res = await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "constent-type": "application/json",
        },
        body: JSON.stringify({ title, description, images, price }),
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
            {/* <CldUploadWidget
        cloudName={process.env.CLOUDINARY_CLOUD_NAME}
        uploadPreset="PresetNyana"
        onSuccess={handleImageUpload}
        onError={(error) => console.error(error)}
      >
        {({ open }) => (
          <button type="button" onClick={open}>
            Upload Image
          </button>
        )}
      </CldUploadWidget> */}
      {/* <div className="flex space-x-2 mb-4">
        <input
          onChange={(e) => {
            const file = e.target.files[0];
            // const imageUrl = URL.createObjectURL(file);
            setImages(file);
          }}
          files={images}
          type="file"
        />

       
      </div> */}

      <label htmlFor="product-tags" className="block font-medium mb-2">
        Tags
      </label>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
          Clothes
        </span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
          Men
        </span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
          Fashion
        </span>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="category-select" className="block font-medium mb-2">
            Category
          </label>
          <select id="category-select" className="w-full p-2 border rounded-md">
            <option value="">Select</option>
          </select>
        </div>
        <div className="flex-1">
          <label
            htmlFor="subcategory-select"
            className="block font-medium mb-2"
          >
            Sub category
          </label>
          <select
            id="subcategory-select"
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select</option>
          </select>
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
