import { NextResponse } from "next/server";
import { addToFavorites } from "@/app/utils/tmdb";
import { authMiddleware } from "@/app/utils/authMiddleware";
import { FavoriteRequest } from "@/app/types/favorite";

export async function POST(req: Request) {
    try {
        authMiddleware(req); 

        const body: FavoriteRequest = await req.json();
        const { movieId, favorite } = body;

        if (!movieId) {
            return NextResponse.json({ error: "Movie ID is required" }, { status: 400 });
        }

        const data = await addToFavorites(movieId, favorite);
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
