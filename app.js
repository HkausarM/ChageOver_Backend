const express = require("express");
const app = express();
const path = require('path')
const userRouter = require('./routes/user')
const homeRouter = require('./routes/home')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/imgs',express.static(path.join(__dirname, 'public/images')));
app.use("/users", userRouter);
app.use("/home", homeRouter);


module.exports = app;