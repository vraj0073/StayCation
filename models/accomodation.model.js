const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Written by - Het Shah - B00886897 - het.shah@dal.ca

const accomodationSchema = new Schema({
  id: {
    type: String,
  },

  title: {
    type: String,
  },
   owner: {
    type: String,
  },
  features: {
    type: String,
  },
  description: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
   type: {
    type: String,
  },
   duration: {
    type: String,
  },
  contact: {
    type: String,
  },
  location: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  }
});

const Accomodation = mongoose.model("accomodations", accomodationSchema);

module.exports = Accomodation;
