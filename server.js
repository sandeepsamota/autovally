const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require("./db");

app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () => console.log(`Node Js Server Started in port ${port}`));
