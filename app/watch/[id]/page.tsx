import { notFound } from "next/navigation";
import Carousel from "@/components/Carousel";
import { getMovieById, getRelatedMovies, movies } from "@/data/movies";

type WatchPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return movies.map((movie) => ({ id: movie.id }));
}

export default async function WatchPage({ params }: WatchPageProps) {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    notFound();
  }

  const relatedContent = getRelatedMovies(movie.genre, movie.id);

  return (
    <section className="space-y-8">
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
        <video controls className="w-full" poster={movie.backdrop}>
          <source src={movie.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-sm text-zinc-400">
          {movie.year} • {movie.duration} • {movie.rating} • {movie.genre}
        </p>
        <p className="max-w-3xl text-zinc-300">{movie.description}</p>
      </div>

      {relatedContent.length > 0 ? (
        <Carousel title="Related Content" movies={relatedContent} />
      ) : null}
    </section>
  );
}
