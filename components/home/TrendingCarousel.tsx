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
import { Button } from "../ui/button";
import Link from "next/link";

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

  const movies: Movie[] = data?.results || [];

  return (
    <section className="relative w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {movies.map((movie) => {
            return (
              <CarouselItem
                key={movie.id}
                className="relative max-w-full max-h-[50vh]   md:max-h-[85vh]"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full brightness-80 h-full object-fill  md:object-fill "
                />
                <div className="absolute z-10  bottom-0">
                  <Button variant={"outline"} asChild>
                    <Link href={`/watch/${movie.id}`}>Watch Now</Link>
                  </Button>
                </div>
              </CarouselItem>
            );
          })}
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
