import connectToMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

/**
 *
 * @param {POST} request - i am creating a request to add this Products to the database
 */

export async function POST(request) {
  const { name, address, city ,surname,postalCode,cartItems} = await request.json();
  await connectToMongoDB();
  /**
   * This will create the new Products
   */
  await Product.create({name, address, city ,surname,postalCode,cartItems});
  return NextResponse.json({message: "Product Created"} , {status: 201});
}

