"use server"
// Watch List TV View
export const getWatchlistTV = async (page: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/account/21870866/watchlist/tv?language=en-US&page=${page}&sort_by=created_at.asc`,
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

// Discover TV Shows
export const discoverTVShows = async (page: number) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
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

// GENRES TV List 

export const  genresTVlist = async (page: number) => {
    const response = await fetch(
        'https://api.themoviedb.org/3/genre/tv/list?language=en',
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

// Treniding TV List 
export const  trenidingTvlist = async () => {
    const response = await fetch(
        'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
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