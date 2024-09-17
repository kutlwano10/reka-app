
import ProductCard from "./ProductCard";

// const API_BASE_URL = "https://http://localhost:3000/api/products";

const fetchProductsData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/products`, { cache: "no-store" }); //cache is to update the new Products
    if(!response.ok) {
      throw Error ("Failed to Fetch Products")
    }
    return response.json();
  } catch (error) {
    console.log("Error loading Products:", error)
    return {product: []}
  }

  
};

const ProductList =async () => {

  const {products = []} = await fetchProductsData()
 


  return (
    <div>
      <div>
        <div className=" px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
      <div className="w-full relative pb-10 text-center bottom-0">
        {/* <button className="border px-4 py-2 shadow-md">Show More</button> */}
      </div>
    </div>
  );
};

export default ProductList;
