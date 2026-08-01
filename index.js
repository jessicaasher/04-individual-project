// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() {
 console.log((await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b").json()))
} 

main();