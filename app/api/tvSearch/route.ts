// import { NextResponse } from "next/server";
// import { searchTVShows } from "@/actions/tmdb";
// import { authMiddleware } from "@/actions/authMiddleware";

// export async function GET(req: Request) {
//     try {
//         authMiddleware(req); // Check authentication

//         const url = new URL(req.url);
//         const query = url.searchParams.get("query"); // Get search query
//         const page = Number(url.searchParams.get("page")) || 1; // Get page number

//         if (!query) {
//             return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
//         }

//         const tvShows = await searchTVShows(query, page);
//         return NextResponse.json(tvShows, { status: 200 });
//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }
