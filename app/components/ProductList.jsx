
import ProductCard from "./ProductCard";

// const API_BASE_URL = "https://http://localhost:3000/api/products";

const fetchProductsData = async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/products`, { cache: "no-store" }); //cache is to update the new Products
    if(!response.ok) {
      throw Error ("Failed to Fetch Products")
    }
    let data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log("Error loading Products:", error)
  }

  
};

const ProductList =async () => {
  

  const products = await fetchProductsData()
//  console.log('12345',products,'12345')

  // let [products, setProducts] = useState([]);
  // let [loading, setLoading] = useState(false);
  // /**To keep the state of the pages */
  // let [pages, setPages] = useState(0);

  // const getProducts = async (pageNumber) => {
  //   try {
  //     const data = await fetchData(pageNumber);
  //     console.log('123')
  //     if(pageNumber!=0){
  //     setProducts((previousProducts) => [...previousProducts, ...data]);
  //     }
  //     else{
  //       setProducts(data)
  //     }
  //     console.log('setp')
  //   } catch (error) {
  //     console.error("Error Fetching Products:", error);
  //   }
  // };

  // useEffect(() => {
  //   getProducts(0);
  // }, []);

  /**
   *
   * @returns number of products
   */
  // const handleShowMore = () => {
  //   console.log("im clicked");
  //   const nextPage = pages + 20;
  //   setPages(nextPage);
  //   getProducts(nextPage)

  // };

  return (
    <div>
      <div>
        <div className=" px-[8%] md:px-0 max-w-xl md:mx-auto grid gap-4 grid-cols-2 lg:grid-cols-5 justify-center md:grid-cols-3 lg:mx-[9%] items-center lg:max-w-none my-4">
          {products.products.map((product) => (
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
