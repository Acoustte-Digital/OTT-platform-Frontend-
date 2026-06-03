"use client";

import { FormEvent, useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.includes("@") || password.length < 6) {
      setError("Enter your name, a valid email, and a password with at least 6 characters.");
      return;
    }

    setError("");
    alert("Account created (demo)");
  };

  return (
    <section className="mx-auto max-w-md py-16">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
        <h1 className="mb-6 text-2xl font-bold text-white">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none ring-red-500 focus:ring-2"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none ring-red-500 focus:ring-2"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none ring-red-500 focus:ring-2"
          />
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button className="w-full rounded bg-red-600 py-2 font-semibold text-white transition hover:bg-red-500">
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}
