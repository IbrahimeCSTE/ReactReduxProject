import express from "express";
import data from "./data.js";
const app = express();
const port = 5000;

app.get("/api/product", (req, res) => {
  res.send(data.Products);
});

app.get("/api/product/:id", (req, res) => {
  const productList = data.Products.find((res) => res._id === req.params.id);
  if (productList) res.send(productList);
  else res.send("Not found");
});

app.get("/", (req, res) => {
  res.send("WELCOME");
});

app.listen(port, () => {
  console.log("server is running");
});
