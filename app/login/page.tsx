"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    alert("Login successful (demo)");
  };

  return (
    <div className="mx-auto grid min-h-[70vh] w-full max-w-md place-items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 rounded-xl border border-white/10 bg-zinc-900/70 p-6"
      >
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <label className="block space-y-2">
          <span className="text-sm text-zinc-300">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none ring-red-500 focus:ring"
            required
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm text-zinc-300">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-white outline-none ring-red-500 focus:ring"
            required
          />
        </label>
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-500"
        >
          Login
        </button>
        <p className="text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-red-400 hover:text-red-300">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
