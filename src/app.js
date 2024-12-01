const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const createError = require("http-errors");

// Initialized express
const app = express();

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.SERVER_PORT || 3001;

app.use(morgan("dev"));

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Server is running" });
});

// Client serror
app.use((req, res, next) => {
  next(createError(404, "Page not found"));
});

// Server error
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = { app, port, host };
