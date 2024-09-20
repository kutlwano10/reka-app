import connectToMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";


/**
 * @param {GET updated Product} request
 * @param {Using it id} param1
 */

export async function GET(request, { params }) {
  const { id } = params;
  await connectToMongoDB();
  const product = await Product.findOne({ _id : id });
  return NextResponse.json({ product }, { status : 200 });
}


