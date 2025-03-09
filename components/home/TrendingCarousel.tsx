"use client";

import { GetTrendingMovies } from "@/actions/GetMovies";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

type Movie = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: "movie";
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const TrendingCarousel = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const handleSelect = useCallback(() => {
    if (carouselApi) {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    }
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    setTotalSlides(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    carouselApi.on("select", handleSelect);
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi, handleSelect]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: GetTrendingMovies,
  });

  if (isLoading) {
    return <p>Loading trending movies...</p>;
  }

  if (isError) {
    return <p>Error loading trending movies.</p>;
  }

  return (
    <section className="relative w-full">
      <Carousel opts={{ align: "start", loop: true }} setApi={setCarouselApi}>
        <CarouselContent>
          {data?.results.map((movie: Movie) => (
            <CarouselItem
              key={movie.id}
              className="relative w-full h-[40vh] sm:h-[60vh] border-b-2 flex-shrink-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  fill
                  className="object-fill "
                />
                <div className="absolute  inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                <div className="absolute  bottom-10 left-10 text-white max-w-xl z-10">
                  <h1 className=" text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                    {movie.title}
                  </h1>
                  <p className=" text-xs md:text-base mb-6 line-clamp-3 drop-shadow-lg">
                    {movie.overview}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Link
                      href={`/watch/${movie.id}`}
                      className="bg-white text-black px-6 py-3 rounded-md font-semibold flex items-center justify-center transition hover:opacity-80"
                    >
                      Play
                    </Link>
                    <Link
                      href={`/details/${movie.id}`}
                      className="bg-gray-600 bg-opacity-80 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center transition hover:bg-gray-500"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-[-30px] right-1/2 flex items-center space-x-2">
          <CarouselPrevious />
          <div className="text-center text-sm text-muted-foreground">
            {currentSlide} of {totalSlides}
          </div>
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default TrendingCarousel;
