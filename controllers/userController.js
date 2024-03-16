const { database } = require("../database")
const bcrypt = require('bcrypt');

const checkLogin = async (req, res) => {

    const { username, password } = req.body;
    let userDetails = await db_connection.collection("Users").findOne({ username });

    if (!userDetails) {
        return res.status(404).json({ message: 'User details not found' });
    }
    else {
        const isValidPassword = await bcrypt.compare(password, userDetails.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.status(200).json(user);
    }
}

module.exports = { checkLogin }