const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(helmet());

app.get("/api", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
