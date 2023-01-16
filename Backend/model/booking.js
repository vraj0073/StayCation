const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    roomId: {
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
        required: true,
    },
    hostName:{
        type: String,
        required: true,
    },
    numberOfGuests:{
        type: Number,
        required: true,
    },
    checkInDate:{
        type: String,
        required: true,
    },
    checkOutDate:{
        type: String,
        required: true,
    },
    perNightCharges:{
        type: Number,
        required : true,
    },
    cleaningFee:{
        type: Number,
        required : true,
    },
    serviceFee : {
        type : Number,
        required: true,
    },
    totalPrice : {
        type : Number,
        required: true,
    },
    },{timestamps:true}
);

module.exports = mongoose.model('Booking', bookingSchema);
