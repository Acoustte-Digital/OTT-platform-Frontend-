"use client";

import { useRef } from "react";
import MovieCard from "@/components/MovieCard";
import type { Movie } from "@/data/movies";

export default function Carousel({ title, items }: { title: string; items: Movie[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="rounded-md bg-zinc-800 px-3 py-1 text-sm text-white transition hover:bg-zinc-700"
            aria-label={`Scroll ${title} left`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="rounded-md bg-zinc-800 px-3 py-1 text-sm text-white transition hover:bg-zinc-700"
            aria-label={`Scroll ${title} right`}
          >
            →
          </button>
        </div>
      </div>
      <div ref={trackRef} className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
