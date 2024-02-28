import express from "express";
import cors from "cors";
const app = express();
const port = 3000; /// http://127.0.0.1:3000/ksldjflkjsd

// make sure you have nodeJS installed from https://nodejs.org/
//cd server
//npm install
//node main.js

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.send("Hello World for test!");
});

app.post("/", (req, res) => {
  // console.log(res);
  res.status(201).send("thanks for adding something");
});

app.put("/:id", (req, res) => {
  res.status(200).send("thanks for updating something");
});

app.patch("/:id", (req, res) => {
  res.status(200).send("thanks for updating something");
});

app.delete("/:id", (req, res) => {
  res.status(200).send("thanks for deleting something");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
