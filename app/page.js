

import ProductList from "./components/ProductList";
import Image from "next/image";
import search from "./public/search.svg";
import vegFruits from "./public/veg&fruits.jpg";
import Filter from "./components/Filter";
import Header from "./components/Header";

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="pt-24 md:pt-36 bg-[#f1f1f1]" >
        <Filter />
        <div className=" flex justify-center">

          <Image className="h-[20rem] object-cover" src={vegFruits} alt="" />
          <div className="w-[50%]  absolute self-center flex ">
            <input
              className="w-full rounded-3xl
             p-2 md:py-4 pr-12 "
              type="text"
              placeholder="Search"
            />
            <button className="absolute flex justify-center items-center md:right-3 right-2 top-1/2 transform -translate-y-1/2  rounded-full ">
              <Image className="w-6 h-6 md:w-8 md:h-8  " src={search} alt="" />
            </button>
          </div>
        </div>
        <ProductList />
            </div>
      </div>
  );
}
