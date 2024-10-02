import connectToMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

/**
 *
 * @param {POST} request - i am creating a request to add this Products to the database
 */

// export async function POST(request) {
//   const { title, description, images, price, category } = await request.json();
//   await connectToMongoDB();
//   /**
//    * This will create the new Products
//    */
//   await Product.create({ title, description, images, price, category });
//   return NextResponse.json({ message: "Product Created" }, { status: 201 });
// }

/**
 *
 * @returns all the List of Products
 */
// export async function GET() {
//     await connectToMongoDB()
//     const products = await Product.find()
//     return NextResponse.json({products})

// }

import { NextResponse } from 'next/server';
import { connectToMongoDB } from './path/to/your/mongoDBConnection';
import Product from './path/to/your/productModel';

// Function to handle GET requests
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category"); // Get the 'category' query param
  const search = searchParams.get("search");

  try {
    // Connect to MongoDB
    await connectToMongoDB();

    // Initialize query object
    let query = {};

    // Filter by category if provided and not 'default'
    if (category && category !== "default") {
      query.category = category;
    }

    // Filter by search string if provided
    if (search && search !== "null") {
      query.title = { $regex: search, $options: "i" }; // Case-insensitive search
    }

    // Fetch products from MongoDB
    const products = await Product.find(query);

    // Return the response with CORS headers
    return new Response(JSON.stringify({ products }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error(error);

    // Return error response with CORS headers
    return new Response(JSON.stringify({ error: "Failed to load products" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204, // No content
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}





