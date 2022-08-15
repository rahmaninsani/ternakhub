const express = require("express");
const router = express.Router();

const CartController = require("../controllers/CartController");

router.get("/", CartController.getAll);
router.post("/", CartController.add);
router.put("/:productId", CartController.update);
router.delete("/:productId", CartController.delete);

module.exports = router;
