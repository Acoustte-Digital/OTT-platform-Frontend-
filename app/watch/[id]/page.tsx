import Link from "next/link";
import { notFound } from "next/navigation";
import Carousel from "@/components/Carousel";
import { movies } from "@/data/movies";

export default async function WatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const selectedMovie = movies.find((movie) => movie.id === id);

  if (!selectedMovie) {
    notFound();
  }

  const related = movies.filter(
    (movie) => movie.id !== selectedMovie.id && movie.category === selectedMovie.category
  );

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/browse" className="text-sm text-zinc-400 transition hover:text-white">
        ← Back to Browse
      </Link>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/50">
        <video
          controls
          className="aspect-video w-full bg-black"
          poster={selectedMovie.image}
          preload="metadata"
          src={selectedMovie.videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="space-y-3">
        <h1 className="text-3xl font-bold text-white">{selectedMovie.title}</h1>
        <p className="text-sm text-zinc-400">
          {selectedMovie.year} • {selectedMovie.duration} • {selectedMovie.category}
        </p>
        <p className="max-w-3xl text-zinc-300">{selectedMovie.description}</p>
      </section>

      {related.length > 0 && <Carousel title="Related Content" items={related} />}
    </div>
  );
}
