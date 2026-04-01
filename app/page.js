"use client";

import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { SearchContext } from "./SearchContext";

const API_KEY = "0834383573949979b4c460ece7f6f494";
const TRENDING_ENDPOINT = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
const SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&include_adult=false&language=en-US`;

async function fetchTrending() {
  const res = await fetch(TRENDING_ENDPOINT);
  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }
  const data = await res.json();
  return data.results || [];
}

async function searchTmdb(query) {
  const searchUrl = `${SEARCH_ENDPOINT}&query=${encodeURIComponent(query)}`;
  const res = await fetch(searchUrl);
  if (!res.ok) {
    throw new Error("Failed to search TMDB");
  }
  const data = await res.json();
  return data.results || [];
}

async function fetchMovieDetails(item) {
  // Decide which TMDB endpoint to hit based on media type.
  const mediaType =
    item.media_type || item.media_type === "" ? item.media_type : null;
  let url;

  if (mediaType === "tv") {
    url = `https://api.themoviedb.org/3/tv/${item.id}?api_key=${API_KEY}&append_to_response=credits`;
  } else {
    // Default to movie details for movies and items without media_type.
    url = `https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&append_to_response=credits`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    // If details call fails (e.g., person result), fall back to original item.
    return item;
  }
  return res.json();
}

function formatRuntimeMinutes(mins) {
  if (!mins || Number.isNaN(mins)) return null;
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  if (!hours) return `${minutes}m`;
  if (!minutes) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}

export default function HomePage() {
  const { query } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrending()
      .then((results) => {
        setItems(results);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // empty query -> refresh trending items
    if (!query) {
      setLoading(true);
      fetchTrending()
        .then((results) => {
          setItems(results);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
      return;
    }

    let cancelled = false;
    const timeout = setTimeout(() => {
      setLoading(true);
      searchTmdb(query)
        .then((results) => {
          if (!cancelled) {
            setItems(results);
          }
        })
        .catch((err) => {
          if (!cancelled) setError(err.message);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 400); // debounce to avoid spamming TMDB

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [query]);

  const handleCardClick = async (item) => {
    try {
      const details = await fetchMovieDetails(item);
      // Merge base item and fetched details so we always have at least overview/title.
      setSelected({ ...item, ...details });
    } catch (err) {
      setError(err.message);
    }
  };

  const closeModal = () => setSelected(null);

  return (
    <>
      <div className="container-max-width">
        <div className="text-cyan-300 font-semibold mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base">
          {items.length
            ? `Displaying ${items.length} ${query ? "Search Results" : "Trending Movies & TV Shows"}`
            : ""}
        </div>

        <main>
          <section>
            {loading && (
              <div className="notice">Loading trending titles...</div>
            )}
            {error && <div className="notice error">{error}</div>}

            <div className="responsive-grid mb-6 sm:mb-8 md:mb-10">
              {items.map((item) => {
                const title = item.title || item.name;
                const date = item.release_date || item.first_air_date;
                const year = date ? new Date(date).getFullYear() : null;
                const displayTitle = year ? `${title} (${year})` : title;
                const poster = item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : null;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className="card-media"
                    onClick={() => handleCardClick(item)}
                  >
                    {poster && (
                      <div className="w-full">
                        <img src={poster} alt={displayTitle} />
                      </div>
                    )}
                    <div className="card-media-content">
                      <h2>{displayTitle}</h2>
                    </div>
                  </button>
                );
              })}
            </div>

            {selected && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content p-3 sm:p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="modal-close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeModal();
                    }}
                    aria-label="Close modal"
                  >
                    &times;
                  </button>
                  <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:gap-6 lg:gap-8 items-start overflow-x-hidden flex-grow">
                    {selected.poster_path && (
                      <div className="w-full md:w-auto md:flex-shrink-0">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`}
                          alt={selected.title || selected.name}
                          className="w-full md:w-auto md:max-h-[70vh] rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-grow w-full">
                      <div>
                        {/* Title, year, genres, runtime, overview */}
                        {(() => {
                          const baseTitle = selected.title || selected.name;
                          const date =
                            selected.release_date || selected.first_air_date;
                          const year = date
                            ? new Date(date).getFullYear()
                            : null;
                          const displayTitle = year
                            ? `${baseTitle} (${year})`
                            : baseTitle;

                          const genresArray = selected.genres || [];
                          const genreNames = genresArray
                            .map((g) => g.name)
                            .filter(Boolean)
                            .join(", ");

                          // Movies: runtime (minutes). TV: episode_run_time is array of minutes.
                          const rawRuntime =
                            selected.runtime ||
                            (Array.isArray(selected.episode_run_time) &&
                              selected.episode_run_time[0]);
                          const runtime = formatRuntimeMinutes(
                            Number(rawRuntime) || 0,
                          );

                          const meta =
                            genreNames && runtime
                              ? `${genreNames} • ${runtime}`
                              : genreNames || runtime || "";

                          return (
                            <>
                              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800">{displayTitle}</h1>
                              {meta && <p className="text-xs sm:text-sm font-semibold text-gray-600">{meta}</p>}
                            </>
                          );
                        })()}
                      </div>

                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {selected.overview || "No description could be found."}
                      </p>

                      <div>
                        {/* Top billed cast */}
                        {selected.credits?.cast?.length > 0 && (
                          <div>
                            <h3 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Top Billed Cast</h3>
                            <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto overflow-y-hidden pb-2">
                              {selected.credits.cast
                                .slice(0, 10)
                                .map((person) => (
                                  <Link
                                    key={person.id}
                                    href={`/person/${person.id}`}
                                    className="block flex-shrink-0 w-20 sm:w-24 no-underline cursor-pointer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {person.profile_path && (
                                      <img
                                        src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                                        alt={person.name}
                                        className="w-20 sm:w-24 h-28 sm:h-36 rounded object-cover mb-2"
                                      />
                                    )}
                                    <p className="text-xs font-semibold text-gray-700 m-0 line-clamp-2">{person.name}</p>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
