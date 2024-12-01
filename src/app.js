const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const userRouter = require("./routers/userRouter");

// Initialized express
const app = express();

app.use(morgan("dev"));

// middleware
app.use(cors());
app.use(express.json());

// user routers

app.use("/api/users", userRouter);

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

module.exports = app;
