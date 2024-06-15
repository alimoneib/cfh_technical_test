const express = require("express");
const router = express.Router();

const Controller = require("./controller");
const { AuthenticationMiddleware } = require("../middlewares");

router.get("/", AuthenticationMiddleware.verify, Controller.getOrders);
router.post("/", AuthenticationMiddleware.verify, Controller.addOrder);

module.exports = router;
