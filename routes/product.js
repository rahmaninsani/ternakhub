const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/flashsale", ProductController.getFlashSale);
router.get("/latest", ProductController.getLatest);
router.get("/best-seller", ProductController.getBestSeller);
router.get("/:id/reviews", ProductController.getReviews);
router.get("/:id", ProductController.getDetail);
router.get("/", ProductController.getAll, ProductController.searchByName);

module.exports = router;
