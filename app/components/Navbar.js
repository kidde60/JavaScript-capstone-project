"use client";

import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { SearchContext } from "../SearchContext";

export default function Navbar() {
  const { query, setQuery } = useContext(SearchContext);
  const router = useRouter();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    // Navigate to home page when search is initiated
    if (value && value.trim()) {
      router.push("/");
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    router.push("/");
  };

  return (
    <header className="border-b border-cyan-300 mb-[5%]">
      <div className="container-max-width">
        <nav className="flex justify-between items-center gap-8 h-20">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img
              src="/assets/images/tv-movie-hub-logo.svg"
              alt="TV/Movie Hub"
              className="h-10 w-auto"
            />
          </Link>

          <ul className="flex gap-12 list-none flex-1 justify-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="mailto:djmrjay@gmail.com">Contact</a>
            </li>
          </ul>

          <div className="relative flex-shrink-0">
            <input
              type="text"
              id="search-input"
              placeholder="Search Movie or TV Show"
              value={query}
              onChange={handleSearchChange}
              className="flex-shrink-0 px-3 py-1 rounded border border-cyan-300 bg-gray-900 text-white min-w-[220px] h-[35px]"
            />
            {query && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-none border-none text-cyan-300 text-lg cursor-pointer p-0 w-5 h-5 flex items-center justify-center transition-colors hover:text-white"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
