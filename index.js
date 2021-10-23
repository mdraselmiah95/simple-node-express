const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send(
    "This is my simple node express project. This is installed nodemon, THis is  just test and also"
  );
});

app.get("/users", (req, res) => {
  res.send("This is users");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});

//npm run start-dev
