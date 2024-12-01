const app = require("./app");
const connectDB = require("./config/db");
const { port, host } = require("./secret");

app.listen(port, async () => {
  console.log(`${host}:${port}`);
  await connectDB();
});
