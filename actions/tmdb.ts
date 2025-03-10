export const addToFavorites = async (media_id: number, favorite: boolean) => {
    const TMDB_API_URL = `https://api.themoviedb.org/3/account/21870866/favorite`;

    try {
        const response = await fetch(TMDB_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                media_type: "movie",
                media_id,
                favorite,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to update favorites");
        }

        return await response.json();
    } catch (error) {
        throw new Error("Error updating favorites");
    }
};

export const getTopRatedMovies = async (page: number = 1) => {
    const TMDB_API_URL = `https://api.themoviedb.org/3/account/21870866/rated/movies?language=en-US&page=${page}&sort_by=created_at.asc`;

    try {
        const response = await fetch(TMDB_API_URL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch top-rated movies");
        }

        return await response.json();
    } catch (error) {
        throw new Error("Error fetching top-rated movies");
    }
};
