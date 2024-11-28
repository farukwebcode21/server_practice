const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.SERVER_PORT || 3001;

// Initialized express
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`${host}:${port}`);
});
