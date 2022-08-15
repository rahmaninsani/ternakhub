const express = require("express");
const router = express.Router();

const AddressController = require("../controllers/AddressController");

router.get("/", AddressController.getAll);
router.post("/", AddressController.add);
router.put("/:id", AddressController.update);
router.delete("/:id", AddressController.delete);

module.exports = router;
