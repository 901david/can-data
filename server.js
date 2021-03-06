// Dependencies
// require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'data')));


//HTML Routes
require("./routes/html-routes.js")(app, path);

//API Routes
require("./routes/api-routes.js")(app);


// Server Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
