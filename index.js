// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() { 
 const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b")
 const movieData = movies.json();
 const x = `<div class="movie-card">
    <img src="https://via.placeholder.com/250x150" alt="Card 1">
    <h2>Movie Five Title</h2>
    <p><b>Series:</b>Series X</p>
    <p><b>Episode:</b>: Episode X</p>
  </div>`
} 

main();