const { validationResult } = require("express-validator");
const mongodb = require("mongodb").MongoClient;
const filesys = require("fs");
const Booking = require('../model/booking')

exports.getbooking = (req,res,next) => {
    Booking.find()
    .then((data) => {
        res.json({data});
        console.log(data);
    })
    .catch((err) => {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
    });
}

exports.createbooking = (req,res,next) => {
    //const errors = validationResult(req);
    //if (!errors.isEmpty()) {
      //  const error = new Error("Validation failed. Please check the input data!");
        //error.statusCode = 422;
        //throw error;
    //}

    const bookingBody = req.body;

    const booking = new Booking(bookingBody);
    booking
    .save()
    .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Booking created successfully!",
          post: result,
        });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
}
