"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <div className="app-container">
        <section className="about-card">
          <div className="about-header">
            <h1>About</h1>
            <p className="about-subtitle">
              A clean, fast way to explore trending titles and search the TMDB
              catalog.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-block">
              <h2>What it does</h2>
              <p>
                TV/Movie Hub pulls trending movies and shows, lets you search
                across TMDB, and opens a detail view with genres, runtime, and
                top billed cast.
              </p>
            </div>

            <div className="about-block">
              <h2>Data source</h2>
              <p>
                Metadata is provided by TMDB. Posters and profile images are
                loaded from TMDB image endpoints.
              </p>
            </div>

            <div className="about-block">
              <h2>Built with</h2>
              <p>
                Next.js (App Router) + React. Styling is kept lightweight and
                simple for readability and performance.
              </p>
            </div>
          </div>

          <div className="about-actions">
            <Link className="about-button" href="/">
              Back to Home
            </Link>
            <a className="about-link" href="https://www.themoviedb.org/">
              Learn more about TMDB
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
