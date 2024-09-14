import ProductList from '@/app/components/ProductList'
import Link from 'next/link'
import cow from "../../public/meat.jpg"
import Image from 'next/image'

const products = () => {
  return (
    <div className="">
  {/* Header */}
  <div className=" py-4 flex justify-between mb-6">
    <h1 className="text-2xl font-bold">Product Grid</h1>
    <div className="flex gap-4 ">
      <button className="border border-gray-300 px-4 py-2 font-semibold rounded hover:bg-gray-200">
        Export
      </button>
      <Link href="/sell/products/addProduct" className="bg-blue-600 text-white px-4 py-2 font-semibold rounded hover:bg-blue-700">
        Create New
      </Link>
    </div>
  </div>

  

  {/* Products Grid */}
  <div className=' '>
    <ProductList className=""/>
  </div>
  
</div>

  )
}

export default products