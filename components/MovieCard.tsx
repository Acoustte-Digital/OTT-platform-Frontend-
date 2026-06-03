import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/data/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/watch/${movie.id}`} className="group block">
      <div className="relative aspect-video overflow-hidden rounded-md bg-zinc-900 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <p className="absolute bottom-2 left-3 right-3 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {movie.title}
        </p>
      </div>
    </Link>
  );
}
