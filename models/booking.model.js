const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Written by - Het Shah - B00886897 - het.shah@dal.ca

const bookingSchema = new Schema({
  pimage: {
    type: String,
  },
  ptitle: {
    type: String,
  },
  datetravelled: {
    type: String,
  },
  pcity: {
    type: String,
  },
  pcountry: {
    type: String,
  },
  pid: {
    type: String,
  },
  useremail: {
    type: String,
  },
});

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
