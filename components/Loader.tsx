type LoaderProps = {
  cards?: number;
};

export default function Loader({ cards = 6 }: LoaderProps) {
  return (
    <div className="animate-pulse">
      <div className="mb-5 h-10 w-2/5 rounded bg-zinc-800" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: cards }).map((_, index) => (
          <div key={index} className="aspect-[2/3] rounded-lg bg-zinc-800" />
        ))}
      </div>
    </div>
  );
}
