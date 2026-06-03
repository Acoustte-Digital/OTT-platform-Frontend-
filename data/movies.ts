export type Movie = {
  id: string;
  title: string;
  description: string;
  genre: string;
  year: number;
  duration: string;
  rating: string;
  poster: string;
  backdrop: string;
  videoUrl: string;
  featured?: boolean;
  tags: ("trending" | "popular" | "recommended")[];
};

export const movies: Movie[] = [
  {
    id: "neon-city",
    title: "Neon City",
    description:
      "A retired detective must return to the undercity to stop a rogue AI before sunrise.",
    genre: "Action",
    year: 2026,
    duration: "2h 04m",
    rating: "PG-13",
    poster: "/images/poster.svg",
    backdrop: "/images/hero.svg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    featured: true,
    tags: ["trending", "popular", "recommended"],
  },
  {
    id: "last-laugh",
    title: "Last Laugh",
    description: "A struggling comic gets one week to save a dying neighborhood theater.",
    genre: "Comedy",
    year: 2025,
    duration: "1h 48m",
    rating: "PG",
    poster: "/images/poster.svg",
    backdrop: "/images/hero.svg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    tags: ["trending", "recommended"],
  },
  {
    id: "broken-tide",
    title: "Broken Tide",
    description: "A coastal town hides a secret linked to a vanished research vessel.",
    genre: "Drama",
    year: 2024,
    duration: "2h 11m",
    rating: "TV-14",
    poster: "/images/poster.svg",
    backdrop: "/images/hero.svg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    tags: ["popular", "recommended"],
  },
  {
    id: "silent-code",
    title: "Silent Code",
    description: "A cryptographer races to decode a message that predicts global blackouts.",
    genre: "Thriller",
    year: 2026,
    duration: "1h 56m",
    rating: "PG-13",
    poster: "/images/poster.svg",
    backdrop: "/images/hero.svg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    tags: ["trending", "popular"],
  },
  {
    id: "hometown-echoes",
    title: "Hometown Echoes",
    description: "Two siblings return home and uncover letters from a forgotten music legend.",
    genre: "Drama",
    year: 2023,
    duration: "1h 42m",
    rating: "TV-14",
    poster: "/images/poster.svg",
    backdrop: "/images/hero.svg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    tags: ["recommended"],
  },
  {
    id: "zero-gravity",
    title: "Zero Gravity",
    description: "An astronaut trapped on a damaged station must survive a solar storm.",
    genre: "Sci-Fi",
    year: 2025,
    duration: "2h 08m",
    rating: "PG-13",
    poster: "/images/poster.svg",
    backdrop: "/images/hero.svg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    tags: ["popular", "recommended"],
  },
];

export const categories = ["All", "Action", "Comedy", "Drama", "Thriller", "Sci-Fi"];

export const featuredMovie = movies.find((movie) => movie.featured) ?? movies[0];

export const moviesByTag = (tag: "trending" | "popular" | "recommended") =>
  movies.filter((movie) => movie.tags.includes(tag));

export const getMovieById = (id: string) => movies.find((movie) => movie.id === id);

export const getRelatedMovies = (genre: string, excludeId: string) =>
  movies.filter((movie) => movie.genre === genre && movie.id !== excludeId);
