const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const controller = require("../controller/bookingController");

router.get("/getbooking", controller.getbooking);

router.post("/createbooking", controller.createbooking);

module.exports = router;
