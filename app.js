const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/", function (req, res, next) {
  res.send("Hello");
});

module.exports=app;