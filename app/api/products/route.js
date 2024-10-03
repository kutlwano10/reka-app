import Cors from 'cors';
import connectToMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { initMiddleware } from "@/libs/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: '*', // Allow all origins, you can restrict it to 'http://localhost:3000'
    allowedHeaders: ['Content-Type'],
  })
);




// Function to handle GET requests
export async function GET(req) {

  await cors(req)
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
export async function OPTIONS(req) {
  await cors(req)
  return new Response(null, {
    status: 204, // No content
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}





