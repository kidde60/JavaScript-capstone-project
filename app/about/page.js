"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <div className="container-max-width">
        <section className="max-w-about mx-auto bg-dark-secondary border border-dark-border rounded-lg p-8 backdrop-blur-sm mb-[5%]">
          <div className="about-header">
            <h1 className="text-4xl mb-2">About</h1>
            <p className="text-dark-text leading-relaxed">
              A clean, fast way to explore trending titles and search the TMDB
              catalog.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-7">
            <div className="bg-dark-overlay border border-dark-border-light rounded-lg p-4">
              <h2 className="text-base mb-2">What it does</h2>
              <p className="text-dark-text leading-relaxed text-sm">
                TV/Movie Hub pulls trending movies and shows, lets you search
                across TMDB, and opens a detail view with genres, runtime, and
                top billed cast.
              </p>
            </div>

            <div className="bg-dark-overlay border border-dark-border-light rounded-lg p-4">
              <h2 className="text-base mb-2">Data source</h2>
              <p className="text-dark-text leading-relaxed text-sm">
                Metadata is provided by TMDB. Posters and profile images are
                loaded from TMDB image endpoints.
              </p>
            </div>

            <div className="bg-dark-overlay border border-dark-border-light rounded-lg p-4">
              <h2 className="text-base mb-2">Built with</h2>
              <p className="text-dark-text leading-relaxed text-sm">
                Next.js (App Router) + React. Styling is kept lightweight and
                simple for readability and performance.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4 items-center flex-wrap">
            <Link 
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-[10px] bg-primary-accent border border-primary-accent-border text-white font-bold hover:bg-opacity-75 transition" 
              href="/"
            >
              Back to Home
            </Link>
            <a 
              className="text-cyan-300 hover:text-white transition" 
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
