const express = require("express");
const router = express.Router();

const { authJwt } = require("../middleware");

const productRoutes = require("./product");
const userRoutes = require("./user");
const addressRoutes = require("./address");
const shippingMethodRoutes = require("./shipping-method");
const paymentMethodRoutes = require("./payment-method");
const cartRoutes = require("./cart");

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/addresses", authJwt.verifyToken, addressRoutes);
router.use("/shipping-methods", authJwt.verifyToken, shippingMethodRoutes);
router.use("/payment-methods", authJwt.verifyToken, paymentMethodRoutes);
router.use("/carts", authJwt.verifyToken, cartRoutes);
router.use("/", (req, res) => {
  res.status(200).json({
    code: res.statusCode,
    status: "OK",
    data: {
      version: "1.0",
    },
  });
});

module.exports = router;
