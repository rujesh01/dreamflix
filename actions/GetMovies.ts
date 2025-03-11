"use server";


// https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1

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

export const GetMovieDetailsById = async (id: string) => {
  const endpoint = `${API_BASE_URL}/3/movie/${id}?language=en-US`;

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
    console.log(data);

    return data;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${id}:`, error);
    throw error;
  }
};
