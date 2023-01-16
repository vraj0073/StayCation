// Written by - Het Shah - B00886897 - het.shah@dal.ca

const router = require("express").Router();
let Wishlist = require("../models/wishlist.model");

// Written by - Het Shah - B00886897 - het.shah@dal.ca

router.route("/").get((req, res) => {
  res.send("Here is the wishlist");
});

// Getting wishlist by user email
router.route("/getwishlist/:email").get((req, res) => {
  const email = req.params.email;
  Wishlist.find({ useremail: email })
    .then((wishlist) => res.json(wishlist))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Deleting wishlist by the id
router.route("/deletewishlist/:id").delete((req, res) => {
  const id = req.params.id;
  Wishlist.deleteOne({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
