import Loader from "@/components/Loader";

export default function WatchLoading() {
  return (
    <div className="space-y-6">
      <div className="h-[40vh] animate-pulse rounded-xl bg-zinc-800" />
      <Loader cards={4} />
    </div>
  );
}
