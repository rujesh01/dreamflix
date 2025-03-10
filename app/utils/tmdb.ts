export const addToFavorites = async (movieId: number, favorite: boolean) => {
    const TMDB_API_URL = "https://api.themoviedb.org/3/account/21870866/favorite";

    try {
        const response = await fetch(TMDB_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`, 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                media_type: "movie",
                media_id: movieId,
                favorite: favorite, 
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to add to favorites");
        }

        return await response.json();
    } catch (error) {
        throw new Error("Error adding movie to favorites");
    }
};
