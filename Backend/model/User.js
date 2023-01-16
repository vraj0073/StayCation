const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phonenumber: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  gender: {
    type: String 
  },
  role: {
    type: String 
  },
  jwt: {
    type: String
  }
});
module.exports = User = mongoose.model("users", UserSchema);