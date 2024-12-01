const { app, port, host } = require("./app");

app.listen(port, () => {
  console.log(`${host}:${port}`);
});
