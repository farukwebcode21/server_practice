const dotenv = require("dotenv");

dotenv.config();

const host = process.env.DB_HOST;
const port = process.env.SERVER_PORT || 3001;
const mongodbURL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/ecommerceMernDB";

module.exports = { host, port, mongodbURL };
