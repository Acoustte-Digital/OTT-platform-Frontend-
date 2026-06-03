import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/browse", label: "Browse" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide text-red-500">
          StreamFlix
        </Link>
        <ul className="flex items-center gap-4 text-sm text-zinc-200 sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
          <li className="grid h-8 w-8 place-items-center rounded-full bg-zinc-700 text-xs font-semibold">
            U
          </li>
        </ul>
      </nav>
    </header>
  );
}
