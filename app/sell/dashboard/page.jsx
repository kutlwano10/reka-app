import React from 'react'
import ProductList from '@/app/components/ProductList'
import cow from "../../public/meat.jpg"
import Image from 'next/image'

const dashboard = () => {
  return (
    <div className="">
  {/* Header */}
  <div className="flex flex-col w-full fixed bg-white z-10 left-64 top-[4rem] py-4   mb-6">
    <h1 className="text-2xl font-bold">Product Grid</h1>
    <div className="flex gap-4 ">
      <button className="border border-gray-300 px-4 py-2 font-semibold rounded hover:bg-gray-200">
        Export
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 font-semibold rounded hover:bg-blue-700">
        Create New
      </button>
    </div>
  </div>

  

  {/* Products Grid */}
  <div className='absolute left-64 top-40  shadow-lg flex justify-between items-center '>
    <ProductList className=""/>
  </div>
  
</div>

  )
}

export default dashboard
