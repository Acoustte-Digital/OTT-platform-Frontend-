import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/data/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/watch/${movie.id}`} className="group relative block min-w-44 overflow-hidden rounded-lg">
      <Image
        src={movie.image}
        alt={movie.title}
        width={320}
        height={460}
        className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 transition group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3 className="truncate text-sm font-semibold text-white">{movie.title}</h3>
        <p className="mt-1 text-xs text-zinc-300 opacity-0 transition group-hover:opacity-100">
          {movie.category} • {movie.year}
        </p>
      </div>
    </Link>
  );
}
