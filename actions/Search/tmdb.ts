"use server"
// Seach Movies 
export const searchMovies = async (query: string, page: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${process.env.TMDB_API_KEY}`,
            "Content-Type": "application/json",
        },
    });

    return response.json();
};


// Tv Search

export const searchTVShows = async (query: string, page: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${process.env.TMDB_API_KEY}`,
            "Content-Type": "application/json",
        },
    });

    return response.json();
};

