const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send(
    "This is my simple node express project. This is installed nodemon, THis is  just test and also"
  );
});

const users = [
  { id: 1, name: "Natalie Portman", born: "June 9, 1981" },
  { id: 2, name: "Scarlett Johansson", born: "November 22, 1984" },
  { id: 3, name: "Jennifer Lawrence", born: " August 15, 1990" },
  { id: 4, name: "Emma Stone", born: "November 6, 1988" },
  { id: 5, name: "Gal Gadot", born: "30 April 1985" },
  { id: 6, name: "Alexandra Daddario", born: "March 16, 1986" },
  { id: 7, name: "Megan Fox", born: "May 16, 1986" },
  { id: 8, name: "Margot Robbie", born: "July 2, 1990" },
  { id: 9, name: "Jessica Alba", born: " April 28, 1981" },
  { id: 10, name: " Léa Seydoux", born: "1 July 1985" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "orange", "banana", "apple"]);
});

app.get("/fruits/mangoes/rip", (req, res) => {
  res.send("Nice testy mango");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});

//npm run start-dev
