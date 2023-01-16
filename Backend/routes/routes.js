const express = require("express");

const router = express.Router();

const controller = require("../controller/hostController");

router.get("/getlisting", controller.gethostlisting);

router.post("/createlisting", controller.createlisting);

router.put("/editlisting/:roomId", controller.updatelisting);

router.delete("/deletelisting/:roomId", controller.deletelisting);

module.exports = router;
