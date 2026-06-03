"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Loader from "@/components/Loader";
import { movies } from "@/data/movies";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const trending = useMemo(() => movies.slice(0, 5), []);
  const popular = useMemo(() => movies.slice(2, 8), []);
  const recommended = useMemo(() => movies.slice(5), []);
  const hero = movies[0];

  return (
    <div className="space-y-8 py-6">
      <section
        className="relative min-h-[340px] overflow-hidden rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end gap-4 p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Featured</p>
          <h1 className="text-3xl font-bold text-white sm:text-5xl">{hero.title}</h1>
          <p className="text-sm text-zinc-200 sm:text-base">{hero.description}</p>
          <div className="flex gap-3">
            <Link
              href={`/watch/${hero.id}`}
              className="rounded bg-white px-5 py-2 font-semibold text-black transition hover:bg-zinc-200"
            >
              Play
            </Link>
            <Link
              href="/browse"
              className="rounded bg-zinc-700/80 px-5 py-2 font-semibold text-white transition hover:bg-zinc-600"
            >
              More Info
            </Link>
          </div>
        </div>
      </section>

      {loading ? (
        <div className="space-y-8">
          <Loader />
          <Loader />
          <Loader />
        </div>
      ) : (
        <div className="space-y-8">
          <Carousel title="Trending Now" items={trending} />
          <Carousel title="Popular Movies" items={popular} />
          <Carousel title="Recommended for You" items={recommended} />
        </div>
      )}
    </div>
  );
}
