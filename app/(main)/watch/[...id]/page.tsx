"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetMovieDetailsById } from "../../../../actions/GetMovies";
import availableSources from "../../../../actions/avilableResources";

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
  const [selectedProvider, setSelectedProvider] = useState(availableSources[0]);

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

  const handleProviderChange = (providerId: string) => {
    const provider = availableSources.find(
      (source) => source.id === providerId
    );
    if (provider) {
      setSelectedProvider(provider);
    }
  };

  const movieUrl = selectedProvider.urls.movie.replace("{id}", id as string);

  return (
    <div className="container mx-auto p-4">
      <div className="video-container mb-8">
        <iframe
          src={movieUrl}
          className="w-full h-96 border-0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="movie-details  p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">
          {movieDetails.title}
        </h1>
        <p className="text-gray-700 mb-4">{movieDetails.description}</p>
        <div className="flex flex-wrap gap-4">
          <p className="text-gray-600">
            <strong>Length:</strong> {movieDetails.length}
          </p>
          <p className="text-gray-600">
            <strong>Genre:</strong> {movieDetails.genre}
          </p>
          <p className="text-gray-600">
            <strong>Ratings:</strong> {movieDetails.ratings}
          </p>
        </div>
      </div>

      <div className="provider-selection mt-4">
        <label
          htmlFor="provider-select"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Select a provider:
        </label>
        <div className="flex flex-wrap gap-2">
          {availableSources.map((source) => (
            <button
              key={source.id}
              className={`p-2 border rounded-md ${
                selectedProvider.id === source.id
                  ? "bg-purple-600 text-white"
                  : "bg-gray-500 text-black"
              }`}
              onClick={() => handleProviderChange(source.id)}
            >
              {source.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
