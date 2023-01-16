const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Written by - Het Shah - B00886897 - het.shah@dal.ca

const wishlistSchema = new Schema({
  pimage: {
    type: String,
  },
  ptitle: {
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

const Wishlist = mongoose.model("wishlist", wishlistSchema);

module.exports = Wishlist;
