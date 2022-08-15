const express = require("express");
const router = express.Router();

const ShippingMethodController = require("../controllers/ShippingMethodController");

router.get("/", ShippingMethodController.getAll);

module.exports = router;
