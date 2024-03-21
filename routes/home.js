const express = require("express");
const homeHandler = require("../Handlers/homeHandler");
const router = express.Router();

router.route("/").get(homeHandler.getAllProducts);

module.exports = router;
