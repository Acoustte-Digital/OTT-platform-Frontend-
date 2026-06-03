"use client";

import { useEffect, useMemo, useState } from "react";
import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";
import { categories, movies } from "@/data/movies";

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredMovies = useMemo(
    () =>
      selectedCategory === "All"
        ? movies
        : movies.filter((movie) => movie.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Browse</h1>
        <p className="text-zinc-400">Discover movies and shows by category.</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <Loader count={8} />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
