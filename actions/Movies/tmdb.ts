"use server";

// Add TO Favroite 
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


// Watch Favroite Movies


export const getFavoriteMovies = async (page: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/account/21870866/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${process.env.TMDB_API_KEY}`,
            "Content-Type": "application/json",
        },
    });

    return response.json();
};


// Get TOp Rated MOvies 
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



//Movies details

export const getMovieDetails = async (movieId: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${process.env.TMDB_API_KEY}`,
            "Content-Type": "application/json",
        },
    });

    return response.json();
};

//Watch List 
export const updateWatchlist = async (mediaId: number, mediaType: "movie" | "tv", watchlist: boolean) => {
    const response = await fetch(`https://api.themoviedb.org/3/account/21870866/watchlist`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.TMDB_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            media_type: mediaType,
            media_id: mediaId,
            watchlist,
        }),
    });

    return response.json();
};

// Watch List Movies View
export const getWatchlistMovies = async (page: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/account/21870866/watchlist/movies?language=en-US&page=${page}&sort_by=created_at.asc`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.TMDB_API_KEY}`,
                "Accept": "application/json",
            },
        }
    );

    return response.json();
};

// Discover Movies 
export const discoverMovies = async (page: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
                "Accept": "application/json",
            },
        }
    );

    return response.json();
};


// GENRES Movies List 

export const  genresMovieslist = async (page: number) => {
    const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?language=en',
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
                "Accept": "application/json",
            },
        }
    );

    return response.json();
};