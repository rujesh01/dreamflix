import { NextResponse } from "next/server";
import { getFavoriteMovies } from "@/actions/tmdb";
import { authMiddleware } from "@/actions/authMiddleware";

export async function GET(req: Request) {
    try {
        authMiddleware(req); // Check authentication

        const url = new URL(req.url);
        const page = Number(url.searchParams.get("page")) || 1; // Get page number

        const favoriteMovies = await getFavoriteMovies(page);
        return NextResponse.json(favoriteMovies, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
