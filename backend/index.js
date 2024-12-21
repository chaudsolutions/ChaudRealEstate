const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// app constants
const mongoUrl = process.env.mongodbLive;
const port = process.env.PORT;

// Create http server
const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

// Connect to Database
mongoose.connect(mongoUrl);

// Fetch models
const requireAuth = require("./Models/requireAuth.js");
// Fetch routes

// Define a default route handler for the root URL ("/")
app.get("/", (req, res) => {
  res.send(
    "Hello, World! This is the root route for INVESTMENT BROKERS SERVERS."
  );
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
