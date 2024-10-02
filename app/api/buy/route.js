import connectToMongoDB from "@/libs/mongodb";
import Bought from "@/models/bought";
import { NextResponse } from "next/server";

/**
 *
 * @param {POST} request - i am creating a request to add this Products to the database
 */

export async function POST(request) {
    console.log('123db')
  const { name, address, city ,surname,postalCode,cartItems} = await request.json();
  await connectToMongoDB();
  /**
   * This will create the new Products
   */
  await Bought.create({name, address, city ,surname,postalCode,cartItems});
  return NextResponse.json({message: "Bought Created"} , {status: 201});
}

