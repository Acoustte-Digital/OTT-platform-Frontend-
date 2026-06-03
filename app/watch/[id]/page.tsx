"use client";

import { useMemo } from "react";
import { notFound, useParams } from "next/navigation";
import Carousel from "@/components/Carousel";
import { movies } from "@/data/movies";

export default function WatchPage() {
  const params = useParams<{ id: string }>();
  const movie = useMemo(() => movies.find((item) => item.id === params.id), [params.id]);

  if (!movie) {
    notFound();
  }

  const related = movies.filter((item) => item.id !== movie.id).slice(0, 5);

  return (
    <section className="space-y-8 py-8">
      <video
        controls
        className="w-full rounded-xl border border-zinc-800 bg-black"
        src={movie.videoUrl}
        poster={movie.image}
      >
        Your browser does not support the video tag.
      </video>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">{movie.title}</h1>
        <p className="max-w-3xl text-zinc-300">{movie.description}</p>
      </div>
      <Carousel title="Related Content" items={related} />
    </section>
  );
}
