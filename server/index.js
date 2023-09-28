import express from "express";
// import cors from "cors";
import { data } from "./data.js";

const app = express();

const port = 5050;

// app.use(cors);
app.use(express.json());

app.get("/users", (req, res) => {
  let results = data;

  const { name, age, city } = req.query;

  if (name) {
    results = results.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (age) {
    results = results.filter((user) => user.age == age);
  }

  if (city) {
    results = results.filter(
      (user) => user.city.toLowerCase() === city.toLowerCase()
    );
  }

  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
