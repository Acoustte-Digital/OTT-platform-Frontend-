"use client";

import { useRef } from "react";
import type { Movie } from "@/data/movies";
import MovieCard from "@/components/MovieCard";

export default function Carousel({ title, items }: { title: string; items: Movie[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: direction === "right" ? 360 : -360,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex gap-2">
          <button
            aria-label={`Scroll ${title} left`}
            onClick={() => scroll("left")}
            className="rounded bg-zinc-800 px-3 py-1 text-sm text-zinc-200 transition hover:bg-zinc-700"
          >
            ←
          </button>
          <button
            aria-label={`Scroll ${title} right`}
            onClick={() => scroll("right")}
            className="rounded bg-zinc-800 px-3 py-1 text-sm text-zinc-200 transition hover:bg-zinc-700"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((movie) => (
          <div key={movie.id} className="min-w-[240px] max-w-[240px] snap-start sm:min-w-[280px] sm:max-w-[280px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}
