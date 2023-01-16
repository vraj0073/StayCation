const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hostName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    bedroom: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    bath: {
      type: Number,
      required: true,
    },
    perNightCharges: {
      type: Number,
      required: true,
    },
    cleaningFee: {
      type: Number,
      required: true,
    },
    serviceFee: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    feature: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
    },
    title: {
      type: String,
    },
    bookedDates: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", listingSchema);
