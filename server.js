// express npm
const express = require("express");

const PORT = process.env.PORT || 8080;

// Creates express app
const app = express();

app.use(express.static("public"));

// Returns JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express-handlebars npm
var exphbs = require("express-handlebars");

// express-handlebars requirement
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes for server
var routes = require("./controllers/burgers_controller.js");
// Use Routes
app.use(routes);

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});