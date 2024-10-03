import connectToMongoDB from "../../../libs/mongodb";
import Product from "../../../models/product";
import { NextResponse } from "next/server";

/**
 *
 * @param {POST} request - i am creating a request to add this Products to the database
 */

export async function POST(request) {
  const { title, description, images , price,category} = await request.json();
  await connectToMongoDB();
  /**
   * This will create the new Products
   */
  await Product.create({ title, description, images, price,category});
  return NextResponse.json({message: "Product Created"} , {status: 201})
}

/**
 * 
 * @returns all the List of Products
 */
// export async function GET() {
//     await connectToMongoDB()
//     const products = await Product.find()
//     return NextResponse.json({products})

// }


export async function GET(req,res) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category'); // Get the 'category' query param
  const search = searchParams.get('search');

  try {
    await connectToMongoDB();

    // Initialize query object
    let query = {};

    // Filter by category if provided and not 'default'
    if (category && category !== 'default') {
      query.category = category;
    }

    // Filter by search string if provided and not null
    if (search && search !== 'null') {
      query.title = { $regex: search, $options: 'i' }; // Case-insensitive search
    }
// console.log(query)
    const products = await Product.find(query);

    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
  return  NextResponse.json({ error: 'Failed to load products' });
  }



  // Parse the query parameters from the request URL
  // const { searchParams } = new URL(request.url);
  // const category = searchParams.get('category'); // Get the 'category' query param
  // const search = searchParams.get('search');

  // //  console.log(category,'123')
  // await connectToMongoDB();
  // // console.log(category)
  // // Find products by category if the category parameter is provided, else return all products
  // const products = category!='default'
  //   ? await Product.find({ category:category })  // Filter products by category
  //   : search? await Product.find({$regex: search, $options: 'i'}):await Product.find();             // Return all products if no category is specified

  // return NextResponse.json({ products });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectToMongoDB()
    await Product.findByIdAndDelete(id)
    return NextResponse.json({message: "Product Deleted"}, {status: 201})
}

// export async function DELETE() {
    
//     await connectToMongoDB()
//     await Product.deleteMany()
//     return NextResponse.json({message: "Product Deleted"}, {status: 201})
// }
