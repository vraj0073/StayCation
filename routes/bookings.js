// Written by - Het Shah - B00886897 - het.shah@dal.ca

const router = require("express").Router();
let Booking = require("../models/booking.model");

// Written by - Het Shah - B00886897 - het.shah@dal.ca

router.route("/").get((req, res) => {
  res.send("Here are the bookings");
});

router.route("/getbookings").get((req, res) => {
  Booking.find()
    .then((Bookings) => res.json(Bookings))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Getting bookings by user email
router.route("/getbookingbyemail/:email").get((req, res) => {
  const email = req.params.email;
  Booking.find({ useremail: email })
    .then((Bookings) => res.json(Bookings))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
