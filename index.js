// API "https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b"

async function main() { 
 const users = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a0269a8b")
 const userData = users.json();
 console.log(usersData);
} 

main();