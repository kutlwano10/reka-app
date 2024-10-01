"use client"
import { useState } from "react";
import Image from "next/image";
import search from "../public/search.svg";
import { useDispatch, useSelector } from 'react-redux';
import {filter,search1} from '../GlobalRedux/Features/Filter/FilterSlice'

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    //console.log(query)
    dispatch(search1(query));
  };

  return (
    <div className="w-[50%] absolute self-center flex">
      <input
        className="w-full rounded-3xl p-2 md:py-4 pr-12"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange} // Update state on change
      />
      <button className="absolute flex justify-center items-center md:right-3 right-2 top-1/2 transform -translate-y-1/2 rounded-full">
        <Image className="w-6 h-6 md:w-8 md:h-8" src={search} alt="" />
      </button>
    </div>
  );
}
