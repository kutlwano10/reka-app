import Header from "@/app/components/Header";



export async function getProductDetails(productId) {
  
  const response = await fetch(`http://localhost:3000/api/products/${productId}`);
   

  if (!response.ok) {
    
    console.log(response.ok)
    throw Error("Failed to fetch Data");
  }
  let data = await response.json();
  return data
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */

export default async function productDetails({ params }) {
    /**
     * The params will get the id of the routed Product Detail using the [id] folder
     */
   
  const {product} = await getProductDetails(params.id);
  // console.log(product)

  return (
    <main>
      {/* <Header/> */}
      <div key={product._id}>
        <img src={product.images} alt='img'/>
        <h1>{product.title}</h1>
        <p>{product.price}</p>

        <p>{product.description}</p>
      </div>
    </main>
  );
}
