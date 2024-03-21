const express = require('express');
const router = express.Router();
const userHandler = require("../Handlers/userHandler")
router.route('/').post(userHandler.checkLogin);
router.route('/createuser').post(userHandler.createUser);

module.exports = router;
