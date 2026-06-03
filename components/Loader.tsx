export default function Loader({ count = 5 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-52 animate-pulse rounded-lg bg-zinc-800/80 sm:h-60 lg:h-64"
        />
      ))}
    </div>
  );
}
