// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');

require("dotenv").config();

// Initialise the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes.js");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://hackathon:hackathon123@cluster0.swkxg.mongodb.net/tt4', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Use Api routes in the App
app.use(apiRoutes);
// Launch app to listen to specified port
app.listen(4500, function () {
    console.log("Running on port " + 4500);
});