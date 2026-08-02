// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"
const movieListEl = document.querySelector(".movie-list");

async function main() { 
 const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b")
 const moviesData = await movies.json();
 console.log(moviesData);
 movieListEl.innerHTML = moviesHTML(moviesData);
}
main();

function movieHTML(movie) {
    return `<div class="movie-card">
        <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg" alt="Card 1">
        <h2>${movie.Title}</h2>
            <p><b>Year:</b> ${movie.Year}</p>
            <p><b>Runtime:</b> ${movie.Runtime}</p>
    </div>`;
}