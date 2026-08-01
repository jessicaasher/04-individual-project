// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() { 
 const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b")
 const movieData = movies.json();
 console.log(await movieData);
} 

main();