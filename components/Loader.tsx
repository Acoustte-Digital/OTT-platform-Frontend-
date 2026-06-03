export default function Loader({ cards = 6 }: { cards?: number }) {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-6 w-40 rounded bg-zinc-800" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: cards }).map((_, index) => (
          <div key={index} className="aspect-video rounded-md bg-zinc-800" />
        ))}
      </div>
    </div>
  );
}
