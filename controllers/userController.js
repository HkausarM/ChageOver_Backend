const { database } = require("../database")

const getUserData = async (req, res) => {
    let user = database.collection("Users").find();
    let userDetails = await user.toArray()
    console.log(userDetails)
    res.send(JSON.stringify({ userDetails: userDetails }))
}

module.exports = { getUserData }