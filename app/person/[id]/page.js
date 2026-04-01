"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const API_KEY = "0834383573949979b4c460ece7f6f494";

async function fetchPerson(personId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`,
  );
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to fetch actor details (${res.status})${text ? `: ${text}` : ""}`,
    );
  }
  return res.json();
}

async function fetchPersonCredits(personId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${API_KEY}&language=en-US`,
  );
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to fetch actor credits (${res.status})${text ? `: ${text}` : ""}`,
    );
  }
  return res.json();
}

async function fetchMediaDetails(item) {
  // Decide which TMDB endpoint to hit based on media type.
  const mediaType = item.media_type;
  let url;

  if (mediaType === "tv") {
    url = `https://api.themoviedb.org/3/tv/${item.id}?api_key=${API_KEY}&append_to_response=credits`;
  } else {
    // Default to movie details for movies
    url = `https://api.themoviedb.org/3/movie/${item.id}?api_key=${API_KEY}&append_to_response=credits`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    // If details call fails, fall back to original item.
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

function pickKnownFor(credits) {
  const all = [...(credits?.cast || []), ...(credits?.crew || [])]
    .filter(Boolean)
    .filter((c) => c.media_type === "movie" || c.media_type === "tv");

  const dedup = new Map();
  for (const c of all) {
    if (!dedup.has(c.id)) dedup.set(c.id, c);
  }

  return [...dedup.values()]
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 12);
}

export default function PersonPage() {
  const params = useParams();
  const personId = params?.id;
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!personId) {
      setLoading(false);
      setError("Actor id is missing.");
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([fetchPerson(personId), fetchPersonCredits(personId)])
      .then(([p, c]) => {
        if (cancelled) return;
        setPerson(p);
        setCredits(c);
      })
      .catch((e) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [personId]);

  const knownFor = useMemo(() => pickKnownFor(credits), [credits]);

  const handleMediaClick = async (item) => {
    try {
      const details = await fetchMediaDetails(item);
      setSelected({ ...item, ...details });
    } catch (err) {
      setError(err.message);
    }
  };

  const closeModal = () => setSelected(null);

  if (loading) {
    return (
      <div className="container-max-width">
        <div className="notice">Loading actor...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container-max-width">
        <div className="notice error">{error}</div>
      </div>
    );
  }
  if (!person) {
    return (
      <div className="container-max-width">
        <div className="notice error">Actor not found.</div>
      </div>
    );
  }

  const profileUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
    : null;

  return (
    <div className="container-max-width">
      <main>
        <section>
          <div className="responsive-flex-row items-start mb-6 sm:mb-8 md:mb-10">
            {profileUrl && (
              <div className="w-full sm:w-auto sm:flex-shrink-0">
                <img 
                  src={profileUrl} 
                  alt={person.name} 
                  className="w-full sm:w-64 md:w-80 lg:w-96 rounded object-cover" 
                />
              </div>
            )}
            <div className="w-full">
              <h1 className="mb-2 sm:mb-3">{person.name}</h1>
              <p className="text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-6">
                {person.known_for_department || "Actor"}
                {person.birthday ? ` • Born ${person.birthday}` : ""}
              </p>
              <p className="text-dark-text-secondary mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base">
                {person.biography || "No biography available."}
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10">
                <h3 className="mb-3 sm:mb-4 text-base sm:text-lg text-white">Known For</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 overflow-hidden pb-2">
                  {knownFor.map((item) => {
                    const title = item.title || item.name;
                    const date = item.release_date || item.first_air_date;
                    const year = date ? new Date(date).getFullYear() : null;
                    const displayTitle = year ? `${title} (${year})` : title;
                    const poster = item.poster_path
                      ? `https://image.tmdb.org/t/p/w185${item.poster_path}`
                      : null;

                    return (
                      <button
                        key={`${item.media_type}-${item.id}`}
                        type="button"
                        className="flex-shrink-0 bg-none border-none cursor-pointer p-0 text-left hover:opacity-80 transition-opacity"
                        onClick={() => handleMediaClick(item)}
                      >
                        {poster && (
                          <img 
                            src={poster} 
                            alt={displayTitle} 
                            className="w-24 sm:w-28 h-32 sm:h-40 rounded object-cover mb-2" 
                          />
                        )}
                        <p className="text-xs sm:text-sm font-semibold text-white line-clamp-2">{displayTitle}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
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
                        className="w-full md:w-auto md:max-h-[70vh] rounded object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-grow w-full">
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
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {selected.overview || "No description could be found."}
                    </p>

                    {selected.credits?.cast?.length > 0 && (
                      <div>
                        <h3 className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4">Top Billed Cast</h3>
                        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto overflow-y-hidden">
                          {selected.credits.cast.slice(0, 10).map((person) => (
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
          )}
        </section>
      </main>
    </div>
  );
}
