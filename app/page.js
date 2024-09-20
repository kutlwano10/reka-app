import ProductList from "./components/ProductList";
import Image from "next/image";
import search from "./public/search.svg";
import vegFruits from "./public/veg&fruits.jpg";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/SearchBar";

export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="pt-24 md:pt-36 bg-[#f1f1f1]">
        <Filter />
        <div className=" flex justify-center">
          <Image className="h-[20rem] object-cover" src={vegFruits} alt="" />
         <Search />
        </div>
        <ProductList />
        {/* <DisplayProducts/> */}
      </div>
    </div>
  );
}
