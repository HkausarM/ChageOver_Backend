const express = require("express");
const categoryHandler = require("../Handlers/categoryHandler");
const router = express.Router();

router.route("/:category").get(categoryHandler.getCategoryProducts);

module.exports = router;