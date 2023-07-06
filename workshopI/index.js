const express = require('express');
const app = express();
const route = require('./routes/route');
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(route);
app.listen(4000, () => {
    console.log("Web is started");
})