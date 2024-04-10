const { database } = require("../database");
const bcrypt = require("bcrypt");
const CryptoJS = require('crypto-js');
require('dotenv').config()

const checkLogin = async (req, res) => {
  const { userName, password } = req.body;
const decryptionKey = process.env.NODE_APP_SECRET_KEY
console.log(password)

  let decryptedPassword = CryptoJS.AES.decrypt(password, decryptionKey).toString(CryptoJS.enc.Utf8);
  console.log(decryptedPassword)

  let userDetails = await database.collection("Users").findOne({ userName });

  if (!userDetails) {
    return res.status(404).json({ message: "User details not found" });
  } else {
    const isValidPassword = await bcrypt.compare(
      decryptedPassword,
      userDetails.password
    );
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    res.status(200).json(userDetails);
  }
};


const createUser = async (req, res) => {
    // /users/createuser
    //{"userName" : "example","password" : "examplepassword","email":"example@gmail.com"} payload
  let { userName, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return;
    }
    console.log("Hashed password:", hash);
    let userObj = {
      userName: userName,
      email: email,
      password: hash,
      userType: "customer",
    };

    database
      .collection("Users")
      .insertOne(userObj)
      .then((result) => {
        console.log(result);
        res.send(JSON.stringify(result));
      });
  });
};

module.exports = { checkLogin, createUser };
