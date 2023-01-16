const Listing = require("../model/schema");

exports.gethostlisting = (req, res, next) => {
  Listing.find()
    .then((data) => {
      res.json({ data });
      console.log(data);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createlisting = (req, res, next) => {

  const name = req.body.name;
  const email = req.body.email;
  const hostName = req.body.hostName;
  const guestSize = req.body.guestSize;
  const bedroom = req.body.bedroom;
  const beds = req.body.beds;
  const bath = req.body.bath;
  const perNightCharges = req.body.perNightCharges;
  const cleaningFee = req.body.cleaningFee;
  const serviceFee = req.body.serviceFee;
  const description = req.body.description;
  const feature = req.body.feature;
  const img = req.body.img;
  const type = req.body.type;
  const location = req.body.location;
  const state =  req.body.state;
  const country = req.body.country;

  const listing = new Listing({
    name: name,
    email: email,
    hostName: hostName,
    guestSize: guestSize,
    bedroom: bedroom,
    beds: beds,
    bath: bath,
    perNightCharges: perNightCharges,
    cleaningFee: cleaningFee,
    serviceFee: serviceFee,
    description: description,
    feature: feature,
    img: img,
    type: type,
    location: location,
    state: state,
    country: country,
    bookedDates: [],
  });
  listing
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Post created successfully!",
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updatelisting = (req, res, next) => {
  const roomId = req.params.roomId;

  const name = req.body.name;
  const email = req.body.email;
  console.log(email);
  const hostName = req.body.hostName;
  const guestSize = req.body.guestSize;
  const bedroom = req.body.bedroom;
  const beds = req.body.beds;
  const bath = req.body.bath;
  const perNightCharges = req.body.perNightCharges;
  const cleaningFee = req.body.cleaningFee;
  const serviceFee = req.body.serviceFee;
  const description = req.body.description;
  const feature = req.body.feature;
  const img = req.body.img;
  const type = req.body.type;
  const location = req.body.location;
  const state =  req.body.state;
  const country = req.body.country;
  const bookedDates = [];  

  Listing.findById(roomId)
    .then((room) => {
      if (!room) {
        const error = new Error("Could not find any room");
        error.statusCode = 404;
        throw error;
      }
      room.name = name;
      room.email = email;
      room.hostName = hostName;
      room.guestSize = guestSize;
      room.bedroom = bedroom;
      room.beds = beds;
      room.bath = bath;
      room.perNightCharges = perNightCharges;
      room.cleaningFee = cleaningFee;
      room.serviceFee = serviceFee;
      room.description = description;
      room.bookedDates = bookedDates;
      room.feature = feature;
      room.img = img;
      room.type = type;
      room.location = location;
      room.state =  state;
      room.country = country;
      return room.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Room details Updated"});
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deletelisting = (req, res, next) => {
  const roomId = req.params.roomId;
  Listing.findById(roomId)
    .then((room) => {
      if (!room) {
        const error = new Error("Could not find item");
        error.statusCode = 404;
        throw error;
      }
      return Listing.findByIdAndRemove(roomId);
    })
    .then((result) => {
      res.status(200).json({ message: "Listing Deleted", room: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
