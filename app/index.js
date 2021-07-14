import express from "express";
import router from "../app/Routes/characters.js";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Star Wars API</h1>");
});
app.use("/api", router);

app.listen(PORT, () => {
  console.log("server running");
});
