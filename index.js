// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() { 
 const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b")
 const moviesData = await movies.json();
 console.log(moviesData);
 moviesData.map(movie => )
 const x = 
} 

main();