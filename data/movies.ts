export interface Movie {
  id: string;
  title: string;
  image: string;
  category: "Action" | "Comedy" | "Drama" | "Sci-Fi" | "Thriller";
  description: string;
  videoUrl: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Midnight Pursuit",
    image: "https://picsum.photos/seed/midnight-pursuit/1200/675",
    category: "Action",
    description:
      "A relentless detective races through neon streets to stop a city-wide conspiracy before sunrise.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "2",
    title: "Laugh Track",
    image: "https://picsum.photos/seed/laugh-track/1200/675",
    category: "Comedy",
    description:
      "A washed-up comedian gets one last shot at fame during a chaotic world tour.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "3",
    title: "Silent Echo",
    image: "https://picsum.photos/seed/silent-echo/1200/675",
    category: "Drama",
    description:
      "After a family secret resurfaces, three siblings must decide what legacy they want to keep.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: "4",
    title: "Orbit 9",
    image: "https://picsum.photos/seed/orbit-9/1200/675",
    category: "Sci-Fi",
    description:
      "A stranded pilot discovers a hidden signal that might alter humanity's future.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    id: "5",
    title: "Shadow Protocol",
    image: "https://picsum.photos/seed/shadow-protocol/1200/675",
    category: "Thriller",
    description:
      "An intelligence analyst is framed and must decode the agency's darkest operation.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: "6",
    title: "Inferno Run",
    image: "https://picsum.photos/seed/inferno-run/1200/675",
    category: "Action",
    description:
      "A former racer returns to the underground circuit to expose a criminal syndicate.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "7",
    title: "Weekend Fix",
    image: "https://picsum.photos/seed/weekend-fix/1200/675",
    category: "Comedy",
    description:
      "Two neighbors launch a side hustle that spins hilariously out of control.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "8",
    title: "Glass Tides",
    image: "https://picsum.photos/seed/glass-tides/1200/675",
    category: "Drama",
    description:
      "A rising violinist confronts stage fright and a mentor's impossible expectations.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: "9",
    title: "Neon Colony",
    image: "https://picsum.photos/seed/neon-colony/1200/675",
    category: "Sci-Fi",
    description:
      "Life on a distant moon turns dangerous when colonists uncover alien technology.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "10",
    title: "Cold Witness",
    image: "https://picsum.photos/seed/cold-witness/1200/675",
    category: "Thriller",
    description:
      "A forensic expert must protect the only witness in a high-profile murder trial.",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMobster.mp4",
  },
];
