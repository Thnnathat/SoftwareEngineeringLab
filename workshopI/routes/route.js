const express = require('express');
const router = express.Router();

async function logMovies() {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    console.log(data.data);
    return data;
}

router.get("/", (req, res) => {
    res.render("../views/index", {logMovies});
})

module.exports = router;