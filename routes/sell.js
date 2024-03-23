const express = require("express");
const sellHandler = require("../Handlers/sellHandler");
const router = express.Router();

router.route("/").post(sellHandler.sellProduct);

module.exports = router;