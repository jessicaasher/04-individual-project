
const API_KEY = 'a0269a8b';
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const moviesGrid = document.querySelector('#moviesGrid');
const resultsInfo = document.querySelector('#resultsInfo');
const sortSelect = document.querySelector('#sortSelect');

let currentMovies = [];


// Event Listener
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        fetchMovies(searchTerm);
    }
})

// Show skeleton loading cards
function showSkeletons() {
    const skeletons = Array(10).fill(0).map(() => `
        <div class="movie-card movie-card--skeleton">
            <div class="movie-card__img--skeleton"></div>
            <div class="movie-card__title movie-card__title--skeleton"></div>
            <div class="movie-card__year movie-card__year--skeleton"></div>
            </div>
        `).join('');

    moviesGrid.innerHTML = skeletons;
}


// Fetch movies from API
async function fetchMovies(searchTerm) {
    showSkeletons();

    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    const data = await res.json();

    if (data.Response === 'True') {
        currentMovies = data.Search;
        resultsInfo.textContent = `Showing: ${searchTerm}`;
        sortSelect.value = 'default'; // Reset sort select to default
        displayMovies(currentMovies);
    } else {
        resultsInfo.textContent = `Showing: ${searchTerm}`;
        moviesGrid.innerHTML = '<p>No movies found.</p>';
        currentMovies = [];
    }
}

//Display movies

function displayMovies(movies) {
    const movieResults = movies.map((movie) => {
        const poster = movie.Poster !== 'N/A' ? movie.Poster : '';

        return `
            <div class="movie-card">
                ${poster ? `<img class="movie-card__img" src="${poster}" alt="${movie.Title}">` : `<div class="movie-card__poster-placeholder">No Poster Available</div>`}
                <h2 class="movie-card__title">${movie.Title}</h2>
                <p class="movie-card__year">${movie.Year}</p>
            </div>
        `;
    }).join('');

    moviesGrid.innerHTML = movieResults;
}