"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 p-4">
      <nav className="flex justify-between">
        <h1 className="text-white text-2xl font-bold">Anam Anwer</h1>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
