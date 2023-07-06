const express = require('express');
const app = express();
const route = require('./routes/route');


app.use(route);
async function logMovies() {
    const response = await fetch("http://localhost:3000/api/users");
    const movies = await response.json();
    console.log(movies);
}

logMovies();

app.listen(4000, () => {
    console.log("Web is started");
})