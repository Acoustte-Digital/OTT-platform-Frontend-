export type Movie = {
  id: string;
  title: string;
  description: string;
  category: "Action" | "Comedy" | "Drama" | "Sci-Fi" | "Thriller";
  image: string;
  backdrop: string;
  year: number;
  duration: string;
  videoUrl: string;
  trending?: boolean;
  popular?: boolean;
  recommended?: boolean;
};

export const movies: Movie[] = [
  {
    id: "echo-protocol",
    title: "Echo Protocol",
    description:
      "An ex-agent tracks a rogue AI through a neon-lit megacity before it can rewrite global defenses.",
    category: "Action",
    image: "/images/poster-1.svg",
    backdrop: "/images/hero.svg",
    year: 2026,
    duration: "2h 05m",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    trending: true,
    popular: true,
    recommended: true,
  },
  {
    id: "late-shift",
    title: "Late Shift",
    description:
      "Two strangers share one unforgettable night shift in the city that never sleeps.",
    category: "Drama",
    image: "/images/poster-2.svg",
    backdrop: "/images/hero.svg",
    year: 2024,
    duration: "1h 48m",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    trending: true,
    recommended: true,
  },
  {
    id: "laugh-line",
    title: "Laugh Line",
    description:
      "A washed-up comic and his daughter hit the road to rediscover what really matters.",
    category: "Comedy",
    image: "/images/poster-3.svg",
    backdrop: "/images/hero.svg",
    year: 2023,
    duration: "1h 36m",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    popular: true,
  },
  {
    id: "signal-zero",
    title: "Signal Zero",
    description:
      "After first contact, a linguist races to decode a warning from deep space.",
    category: "Sci-Fi",
    image: "/images/poster-4.svg",
    backdrop: "/images/hero.svg",
    year: 2025,
    duration: "2h 12m",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    popular: true,
    recommended: true,
  },
  {
    id: "red-silence",
    title: "Red Silence",
    description:
      "A missing journalist leaves behind a puzzle only her brother can solve.",
    category: "Thriller",
    image: "/images/poster-5.svg",
    backdrop: "/images/hero.svg",
    year: 2022,
    duration: "1h 59m",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    trending: true,
    popular: true,
  },
  {
    id: "home-team",
    title: "Home Team",
    description:
      "An underdog neighborhood squad finds its rhythm when a new coach arrives.",
    category: "Drama",
    image: "/images/poster-6.svg",
    backdrop: "/images/hero.svg",
    year: 2021,
    duration: "1h 44m",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    recommended: true,
  },
];

export const categories = ["All", "Action", "Comedy", "Drama", "Sci-Fi", "Thriller"] as const;
