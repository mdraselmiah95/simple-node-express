const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("This is my simple node express project. nice");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
