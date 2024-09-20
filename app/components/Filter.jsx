'use client'
import Image from "next/image";
import meat from "../public/meat.jpg"
import { useDispatch, useSelector } from 'react-redux';
import {filter} from '../GlobalRedux/Features/Filter/FilterSlice'
import ProductList from "./ProductList";



const Filter = () => {
  const dispatch = useDispatch();
  function filterCate(label){
    dispatch(filter(label));
    // ProductList();
  }
  
  return (
<div>
  <h1 className="text-gray-800 text-2xl font-semibold pl-5 mb-4">Categories</h1>
  <div className="flex w-full  gap-6 mb-8 justify-center  overflow-x-auto ">
    {[
      { src: meat, label: "Minerals" },
      { src: meat, label: "Pets" },
      { src: meat, label: "Live Stock" },
      { src: meat, label: "Fruits and Veg" },
      { src: meat, label: "Gardening" },
      { src: meat, label: "Clean Water" },
      { src: meat, label: "Meat and Fish" },
      { src: meat, label: "Kasi Food" },
    ].map((category, index) => (
      <div key={index} onClick={()=>filterCate(category.label)} className="flex-shrink-0 text-center">
        <Image
          className="w-14 h-14 object-cover rounded-full mx-auto"
          src={category.src}
          alt={category.label}
        />
        <h1 className="mt-2 ">{category.label}</h1>
      </div>
    ))}
  </div>
</div>
  );
};

export default Filter;
