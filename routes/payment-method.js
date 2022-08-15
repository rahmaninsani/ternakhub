const express = require("express");
const router = express.Router();

const PaymentMethodController = require("../controllers/PaymentMethodController");

router.get("/", PaymentMethodController.getAll);

module.exports = router;
