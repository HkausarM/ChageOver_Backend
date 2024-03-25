const express = require("express");
const app = express();
const path = require('path')
const userRouter = require('./routes/user')
const homeRouter = require('./routes/home')
const categoryRouter = require('./routes/category')
const sellRouter = require('./routes/sell')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = function(req, res, next){ 
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
}
app.use(corsOptions);

app.use('/imgs',express.static(path.join(__dirname, 'public/images')));
app.use("/users", userRouter);
app.use("/home", homeRouter);
app.use("/category", categoryRouter);
app.use("/sell",sellRouter);

module.exports = app;