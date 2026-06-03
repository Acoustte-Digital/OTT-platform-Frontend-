"use client";

import { useEffect, useMemo, useState } from "react";
import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/movies";

const categories = ["All", "Action", "Comedy", "Drama", "Sci-Fi", "Thriller"] as const;

type Category = (typeof categories)[number];

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredMovies = useMemo(() => {
    if (selectedCategory === "All") {
      return movies;
    }

    return movies.filter((movie) => movie.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="space-y-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-white">Browse</h1>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1 text-sm transition ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <Loader cards={8} />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}
