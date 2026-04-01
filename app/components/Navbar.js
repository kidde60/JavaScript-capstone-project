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
    <header className="header">
      <div className="app-container">
        {" "}
        <nav className="navbar">
          <Link href="/" className="brand-logo">
            <img
              src="/assets/images/tv-movie-hub-logo.svg"
              alt="TV/Movie Hub"
            />
          </Link>

          <ul className="nav-list">
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

          <div className="search-wrapper">
            <input
              type="text"
              id="search-input"
              placeholder="Search Movie or TV Show"
              value={query}
              onChange={handleSearchChange}
            />
            {query && (
              <button
                className="clear-search-btn"
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
