// Written by - Het Shah - B00886897 - het.shah@dal.ca

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


// Written by - Het Shah - B00886897 - het.shah@dal.ca

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// URI for MongoDB Atlas

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connecting with MongoDB

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established succesfully!");
});

const bookingRouter = require("./routes/bookings");
const searchRouter = require("./routes/search");

// Bookings API
app.use("/bookings", bookingRouter);

// Search API
app.use("/search",searchRouter);

app.listen(PORT, () => {
  console.log(`Server running on the PORT ${PORT}`);
});

