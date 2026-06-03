export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 text-sm text-zinc-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} StreamFlix. All rights reserved.
      </div>
    </footer>
  );
}
