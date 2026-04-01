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
      <div className="app-container">
        <div className="status-message">Loading actor...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="app-container">
        <div className="status-message error">{error}</div>
      </div>
    );
  }
  if (!person) {
    return (
      <div className="app-container">
        <div className="status-message error">Actor not found.</div>
      </div>
    );
  }

  const profileUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
    : null;

  return (
    <div className="app-container">
      <main>
        <section>
          <div className="person-details">
            {profileUrl && <img src={profileUrl} alt={person.name} />}
            <div>
              <h1 className="person-title">{person.name}</h1>
              <p className="meta-text">
                {person.known_for_department || "Actor"}
                {person.birthday ? ` • Born ${person.birthday}` : ""}
              </p>
              <p className="person-bio">
                {person.biography || "No biography available."}
              </p>

              <div className="knownfor-section">
                <h3>Known For</h3>
                <div className="knownfor-list">
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
                        className="knownfor-card"
                        onClick={() => handleMediaClick(item)}
                      >
                        {poster && <img src={poster} alt={displayTitle} />}
                        <p>{displayTitle}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {selected && (
            <div className="modal-backdrop" onClick={closeModal}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span
                  className="close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                >
                  &times;
                </span>
                <div className="modal-content" id="modal-modal-content">
                  {selected.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${selected.poster_path}`}
                      alt={selected.title || selected.name}
                    />
                  )}
                  <div>
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
                          <h1>{displayTitle}</h1>
                          {meta && <p className="meta-text">{meta}</p>}
                        </>
                      );
                    })()}
                    <p>
                      {selected.overview || "No description could be found."}
                    </p>

                    {selected.credits?.cast?.length > 0 && (
                      <div className="cast-section">
                        <h3>Top Billed Cast</h3>
                        <div className="cast-list">
                          {selected.credits.cast.slice(0, 10).map((person) => (
                            <Link
                              key={person.id}
                              href={`/person/${person.id}`}
                              className="cast-card"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {person.profile_path && (
                                <img
                                  src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                                  alt={person.name}
                                />
                              )}
                              <p>{person.name}</p>
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
