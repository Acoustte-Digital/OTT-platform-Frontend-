"use client";

import { useRef } from "react";
import type { Movie } from "@/data/movies";
import MovieCard from "@/components/MovieCard";

type CarouselProps = {
  title: string;
  movies: Movie[];
};

export default function Carousel({ title, movies }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) {
      return;
    }

    const amount = direction === "left" ? -320 : 320;
    containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-white transition hover:bg-zinc-700"
            aria-label={`Scroll ${title} left`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-white transition hover:bg-zinc-700"
            aria-label={`Scroll ${title} right`}
          >
            →
          </button>
        </div>
      </div>
      <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {movies.map((movie) => (
          <div key={movie.id} className="w-[180px] flex-shrink-0 sm:w-[200px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}
