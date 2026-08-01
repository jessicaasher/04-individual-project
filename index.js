// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() {
 const 
 console.log(await (await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b").json()))
} 

main();