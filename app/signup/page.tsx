"use client";

import { useState } from "react";

type FormErrors = {
  email?: string;
  password?: string;
};

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!password || password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    validate();
  };

  return (
    <section className="mx-auto max-w-md rounded-xl bg-zinc-900/80 p-6 shadow-xl sm:p-8">
      <h1 className="mb-6 text-2xl font-bold text-white">Create Account</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white outline-none focus:border-red-500"
            placeholder="you@example.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="password" className="mb-2 block text-sm text-zinc-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-white outline-none focus:border-red-500"
            placeholder="At least 6 characters"
          />
          {errors.password ? <p className="mt-1 text-xs text-red-400">{errors.password}</p> : null}
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-red-600 py-2 font-semibold text-white transition hover:bg-red-500"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
