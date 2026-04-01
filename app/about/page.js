"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <div className="container-max-width">
        <section className="max-w-3xl mx-auto bg-dark-secondary border border-dark-border rounded-lg p-4 sm:p-6 md:p-8 backdrop-blur-sm mb-6 sm:mb-8 md:mb-10">
          <div className="about-header mb-6 sm:mb-8 md:mb-10">
            <h1 className="mb-2 sm:mb-3">About</h1>
            <p className="text-dark-text leading-relaxed text-sm sm:text-base">
              A clean, fast way to explore trending titles and search the TMDB
              catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10">
            <div className="bg-dark-overlay border border-dark-border-light rounded-lg p-3 sm:p-4 md:p-5">
              <h2 className="text-base sm:text-lg mb-2 sm:mb-3">What it does</h2>
              <p className="text-dark-text leading-relaxed text-xs sm:text-sm">
                TV/Movie Hub pulls trending movies and shows, lets you search
                across TMDB, and opens a detail view with genres, runtime, and
                top billed cast.
              </p>
            </div>

            <div className="bg-dark-overlay border border-dark-border-light rounded-lg p-3 sm:p-4 md:p-5">
              <h2 className="text-base sm:text-lg mb-2 sm:mb-3">Data source</h2>
              <p className="text-dark-text leading-relaxed text-xs sm:text-sm">
                Metadata is provided by TMDB. Posters and profile images are
                loaded from TMDB image endpoints.
              </p>
            </div>

            <div className="bg-dark-overlay border border-dark-border-light rounded-lg p-3 sm:p-4 md:p-5">
              <h2 className="text-base sm:text-lg mb-2 sm:mb-3">Built with</h2>
              <p className="text-dark-text leading-relaxed text-xs sm:text-sm">
                Next.js (App Router) + React. Styling is kept lightweight and
                simple for readability and performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center flex-wrap">
            <Link 
              className="btn-primary" 
              href="/"
            >
              Back to Home
            </Link>
            <a 
              className="text-cyan-300 hover:text-white transition-colors text-sm sm:text-base py-2" 
              href="https://www.themoviedb.org/"
            >
              Learn more about TMDB
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
