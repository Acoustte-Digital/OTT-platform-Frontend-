import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/data/movies";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/watch/${movie.id}`} className="group relative block min-w-[180px] overflow-hidden rounded-xl">
      <Image
        src={movie.poster}
        alt={`${movie.title} poster`}
        width={320}
        height={480}
        className="aspect-[2/3] w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
        <h3 className="text-sm font-semibold text-white">{movie.title}</h3>
        <p className="text-xs text-zinc-300">
          {movie.genre} • {movie.year}
        </p>
      </div>
    </Link>
  );
}
