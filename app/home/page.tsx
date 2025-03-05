import { GetTrendingMovies } from "@/actions/GetMovies";
import { MovieCardWrapper } from "@/components/movies/MoviesCardWrapper";
import Link from "next/link";

type Movie = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: "movie";
  adult: boolean;
  original_language: string;
  genre_ids: number[]; // Assuming genre_ids is an array of numbers
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const HomePage = async () => {
  const { results, page } = await GetTrendingMovies();

  return (
    <main className="flex flex-wrap mx-auto items-center justify-center">
      {results.map((movie: Movie) => (
        <div className="flex flex-row" key={movie.id}>
            <Link href={`/watch/${movie.id}`}>
          <MovieCardWrapper movie={movie} />
            </Link>
        </div>
      ))}

      <h1 className="text-white">This is the home page</h1>
    </main>
  );
};

export default HomePage;
