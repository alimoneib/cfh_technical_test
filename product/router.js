const express = require("express");
const router = express.Router();

const Controller = require("./controller");
const { AuthenticationMiddleware } = require("../middlewares");

router.get("/", AuthenticationMiddleware.verify, Controller.getProducts);
router.post("/", AuthenticationMiddleware.verify, Controller.addProduct);
router.put("/", AuthenticationMiddleware.verify, Controller.updateProduct);
router.delete("/", AuthenticationMiddleware.verify, Controller.deleteProduct);

module.exports = router;
