"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchContext } from "../SearchContext";

export default function Navbar() {
  const { query, setQuery } = useContext(SearchContext);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    // Navigate to home page when search is initiated
    if (value && value.trim()) {
      router.push("/");
      setMobileMenuOpen(false);
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    router.push("/");
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-cyan-300 mb-4 sm:mb-5 md:mb-6">
      <div className="container-max-width">
        <nav className="flex justify-between items-center gap-3 sm:gap-4 md:gap-8 min-h-16 sm:min-h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center py-2">
            <img
              src="/assets/images/tv-movie-hub-logo.svg"
              alt="TV/Movie Hub"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden sm:flex gap-6 md:gap-12 list-none flex-1 justify-center text-sm md:text-base">
            <li>
              <Link href="/" onClick={handleNavClick} className="hover:text-cyan-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleNavClick} className="hover:text-cyan-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <a href="mailto:djmrjay@gmail.com" className="hover:text-cyan-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Search Input */}
          <div className="hidden sm:flex relative flex-shrink-0">
            <input
              type="text"
              id="search-input-desktop"
              placeholder="Search Movie or TV Show"
              value={query}
              onChange={handleSearchChange}
              className="px-3 py-2 rounded border border-cyan-300 bg-gray-900 text-white text-sm w-48 md:w-56 h-10 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50"
              aria-label="Search movies and TV shows"
            />
            {query && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-none border-none text-cyan-300 text-lg cursor-pointer p-1 hover:text-white transition-colors"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-2 hover:bg-dark-secondary rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`w-5 h-0.5 bg-cyan-300 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-cyan-300 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-cyan-300 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-cyan-300 py-3 px-0">
            <div className="relative mb-3">
              <input
                type="text"
                id="search-input-mobile"
                placeholder="Search..."
                value={query}
                onChange={handleSearchChange}
                className="w-full px-3 py-2 rounded border border-cyan-300 bg-gray-900 text-white text-sm h-10 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50"
                aria-label="Search movies and TV shows"
              />
              {query && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-none border-none text-cyan-300 text-lg cursor-pointer p-1 hover:text-white transition-colors"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            <ul className="flex flex-col gap-3 list-none text-sm">
              <li>
                <Link href="/" onClick={handleNavClick} className="block py-2 hover:text-cyan-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={handleNavClick} className="block py-2 hover:text-cyan-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:djmrjay@gmail.com" className="block py-2 hover:text-cyan-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
