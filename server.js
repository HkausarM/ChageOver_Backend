// const app = require("./app");

// const port = 3000;

// const server = app.listen(port, () => {
//   console.log("App running on 3000");
// });

// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://hennakausarformal:Henna%40atlas09@cluster0.inydhlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// User Model
const User = require('./models/User');

// Routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
