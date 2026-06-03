"use client";

import { useEffect, useMemo, useState } from "react";
import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";
import { categories, movies } from "@/data/movies";

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [selectedCategory]);

  const filteredMovies = useMemo(() => {
    if (selectedCategory === "All") {
      return movies;
    }

    return movies.filter((movie) => movie.genre === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Browse</h1>
        <p className="mt-2 text-zinc-400">Discover movies and shows by category.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setIsLoading(true);
              setSelectedCategory(category);
            }}
            className={`rounded-full px-4 py-2 text-sm transition ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {isLoading ? (
        <Loader cards={8} />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}
