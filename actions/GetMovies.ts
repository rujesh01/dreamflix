"use server";

// https://api.themoviedb.org/3/trending/movie/day?language=en-US

const API_BASE_URL = "https://api.themoviedb.org";
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const GetTrendingMovies = async () => {
  const endpoint = `${API_BASE_URL}/3/trending/movie/day?language=en-US`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching movies data:", error);
    throw error;
  }
};
