// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() { 
 const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b")
 const moviesData = await movies.json();
 const movieListEl = document.querySelector(".movie-list");
 
 movieListEl.innerHTML = moviesData
    .map(
        (movie) => `<div class="movie-card">
        <img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg" alt="Card 1">
        <h2>Movie Five Title</h2>
        <p><b>Series:</b>Series X</p>
        <p><b>Episode:</b>: Episode X</p>
    </div>`
        )
        .join("")
 );
} 

main();