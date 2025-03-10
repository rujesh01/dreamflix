"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetMovieDetailsById } from "../../../../actions/GetMovies";

type MovieDetails = {
  title: string;
  description: string;
  length: string;
  genre: string;
  ratings: string;
};

type Props = {
  params: Promise<{ id: string }>;
};

const PlayerPage = ({ params }: Props) => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["moviedetails", id],
    queryFn: () => GetMovieDetailsById(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return <p>Loading movie details...</p>;
  }

  if (isError) {
    return <p>Error loading movie details.</p>;
  }

  if (!data) {
    return <p>No movie details found.</p>;
  }

  const movieDetails: MovieDetails = {
    title: data.title,
    description: data.overview,
    length: `${data.runtime} minutes`,
    genre: data.genres.map((genre: { name: string }) => genre.name).join(", "),
    ratings: `${data.vote_average} (${data.vote_count} votes)`,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="video-container mb-8">
        <iframe
          src={`https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`}
          className="w-full h-96 border-0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="movie-details  p-6 rounded-lg shadow-lg  text-gray-500">
        <h1 className="text-3xl font-bold mb-4 text-gray-500">
          {movieDetails.title}
        </h1>
        <p className=" mb-4">{movieDetails.description}</p>
        <div className="flex flex-wrap gap-4">
          <p className="">
            <strong>Length:</strong> {movieDetails.length}
          </p>
          <p className="">
            <strong>Genre:</strong> {movieDetails.genre}
          </p>
          <p className="">
            <strong>Ratings:</strong> {movieDetails.ratings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
