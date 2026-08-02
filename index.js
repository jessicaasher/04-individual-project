// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() { 
 const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b")
 const moviesData = await movies.json();
 const movieListEl = document.querySelector(".movie-list");
 console.log(moviesData);
 movieListEl.innerHTML = moviesData
    .map(
        (movie) => 
    )
    .join("");
} 

main();