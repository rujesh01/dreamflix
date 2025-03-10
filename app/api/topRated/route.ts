import { NextResponse } from "next/server";
import { getTopRatedMovies } from "@/actions/tmdb";
import { authMiddleware } from "@/actions/authMiddleware";

export async function GET(req: Request) {
    try {
        authMiddleware(req);

        const url = new URL(req.url);
        const page = Number(url.searchParams.get("page")) || 1; 

        const movies = await getTopRatedMovies(page);
        return NextResponse.json(movies, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
