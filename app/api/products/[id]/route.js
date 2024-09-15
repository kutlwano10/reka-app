import connectToMongoDB from "@/libs/mongodb"
import Product from "@/models/product"
import { NextResponse } from "next/server"

export async function PUT(request,params) {
    const {id} = params
    const {newTitle : title, newDescription: description} =await request.json()
    await connectToMongoDB()
    await Product.findByIdAndUpdate(id, {title, description})
    return NextResponse.json({message: "Product Updated"}, {status:2001})
}