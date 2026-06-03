"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";
import Loader from "@/components/Loader";
import { movies } from "@/data/movies";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const featured = movies[0];

  return (
    <div className="space-y-10 pb-10">
      <section className="relative h-[65vh] min-h-[420px] overflow-hidden">
        <Image src={featured.backdrop} alt={featured.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-end gap-4 px-4 pb-10 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-300">Featured</p>
          <h1 className="max-w-xl text-4xl font-bold sm:text-5xl">{featured.title}</h1>
          <p className="max-w-xl text-zinc-300">{featured.description}</p>
          <div className="flex gap-3">
            <Link
              href={`/watch/${featured.id}`}
              className="rounded-md bg-white px-5 py-2.5 font-semibold text-black transition hover:bg-zinc-200"
            >
              Play
            </Link>
            <Link
              href="/browse"
              className="rounded-md bg-zinc-700/80 px-5 py-2.5 font-semibold text-white transition hover:bg-zinc-600"
            >
              More Info
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        {loading ? (
          <Loader count={10} />
        ) : (
          <>
            <Carousel title="Trending Now" items={movies.filter((movie) => movie.trending)} />
            <Carousel title="Popular Movies" items={movies.filter((movie) => movie.popular)} />
            <Carousel title="Recommended for You" items={movies.filter((movie) => movie.recommended)} />
          </>
        )}
      </div>
    </div>
  );
}
