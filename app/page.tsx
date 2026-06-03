import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { featuredMovie, moviesByTag } from "@/data/movies";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="relative h-[55vh] overflow-hidden rounded-2xl">
        <Image
          src={featuredMovie.backdrop}
          alt={`${featuredMovie.title} backdrop`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="relative z-10 flex h-full max-w-xl flex-col justify-end gap-4 p-6 sm:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Featured</p>
          <h1 className="text-3xl font-bold sm:text-5xl">{featuredMovie.title}</h1>
          <p className="text-sm text-zinc-300 sm:text-base">{featuredMovie.description}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/watch/${featuredMovie.id}`} className="rounded-md bg-white px-5 py-2 font-semibold text-black transition hover:bg-zinc-200">
              Play
            </Link>
            <Link href="/browse" className="rounded-md bg-zinc-700/80 px-5 py-2 font-semibold text-white transition hover:bg-zinc-600/80">
              More Info
            </Link>
          </div>
        </div>
      </section>

      <Carousel title="Trending Now" movies={moviesByTag("trending")} />
      <Carousel title="Popular Movies" movies={moviesByTag("popular")} />
      <Carousel title="Recommended for You" movies={moviesByTag("recommended")} />
    </div>
  );
}
