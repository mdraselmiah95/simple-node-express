const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send(
    "This is my simple node express project. This is installed nodemon, THis is  just test and also"
  );
});

const users = [
  {
    id: 0,
    name: "Natalie Portman",
    born: "June 9, 1981",
    email: "natalie@gmial.com",
  },
  {
    id: 1,
    name: "Scarlett Johansson",
    born: "November 22, 1984",
    email: "scarlett@gmail.com",
  },
  {
    id: 2,
    name: "Jennifer Lawrence",
    born: " August 15, 1990",
    email: "jennifer@gmail.com",
  },
  {
    id: 3,
    name: "Emma Stone",
    born: "November 6, 1988",
    email: "emma@gmail.com",
  },
  { id: 4, name: "Gal Gadot", born: "30 April 1985", email: "gadot@gmail.com" },
  {
    id: 5,
    name: "Alexandra Daddario",
    born: "March 16, 1986",
    email: "alexandra@gmail.com",
  },
  {
    id: 6,
    name: "Megan Fox",
    born: "May 16, 1986",
    email: "megan@gmail.com",
  },
  {
    id: 7,
    name: "Margot Robbie",
    born: "July 2, 1990",
    email: "margot@gmail.com",
  },
  {
    id: 8,
    name: "Jessica Alba",
    born: " April 28, 1981",
    email: "jessica@gmail.com",
  },
  {
    id: 9,
    name: " Léa Seydoux",
    born: "1 July 1985",
    email: "seydoux@gmail.com",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUsers = req.body;
  newUsers.id = users.length;
  users.push(newUsers);
  const newUser = console.log("Hitting the post.", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUsers);
});

//dynamic api
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
