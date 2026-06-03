export default function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-800 bg-black py-8 text-zinc-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} StreamX. All rights reserved.</p>
        <p>Built for modern OTT experiences.</p>
      </div>
    </footer>
  );
}
