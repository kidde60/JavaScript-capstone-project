const API_KEY = "0834383573949979b4c460ece7f6f494";
const ENDPOINT = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

document.addEventListener("DOMContentLoaded", () => {
  displayTrendingMovies();
  setupModalClose();
});

async function fetchTrendingMovies() {
  const response = await fetch(ENDPOINT);
  const movies = await response.json();
  return movies.results;
}

async function displayTrendingMovies() {
  const movies = await fetchTrendingMovies();

  const movieCount = document.querySelector(".show-count");
  movieCount.innerText = `Displaying ${countItems(movies)} Movies & TV Shows`;

  const container = document.getElementById("movies");
  container.innerHTML = "";

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    container.appendChild(card);
  });
}

function countItems(items) {
  return items.length;
}

function createMovieCard(movie) {
  const { id, title, name, poster_path } = movie;

  const card = document.createElement("div");
  card.classList.add("card-item");
  card.dataset.movieId = id;
  card.innerHTML = `
    <div>
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${
    title || name
  }">
    </div>
    <div class="card-text">
      <h2 class="movie-title">${title || name}</h2>
    </div>
  `;

  // Add event listener to open modal popup
  card.addEventListener("click", () => {
    displayMovieDetailsModal(id);
  });

  return card;
}

async function fetchMovieDetails(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const movieDetails = await response.json();
  return movieDetails;
}

function displayMovieDetailsModal(movieId) {
  const modal = document.getElementById('modal');
  // const modalContent = document.querySelector('.modal-content');

  fetchMovieDetails(movieId).then(movieDetails => {
    const { title, poster_path, overview } = movieDetails;

    // Populate modal with movie details
    const modalMovieDetails = document.getElementById('modal-modal-content');
    modalMovieDetails.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
      <div>
        <h1>${title}</h1>
        <p>${overview}</p>
      </div>
    `;

    // Show modal display
    modal.style.display = 'block';
  });
}

function setupModalClose() {
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-btn");

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
