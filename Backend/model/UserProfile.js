const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfile1Schema = new Schema({
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  phone: {
    type: String,
  },
  Image:{
      type: String,
  },
  livesin: {
    type: String,
  },
  speaks: {
    type: String 
  },
  works: {
    type: String 
  }
});
module.exports = UserProfile = mongoose.model("userprofile1", UserProfile1Schema);