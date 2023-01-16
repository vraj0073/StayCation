const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userEmail: {
        required: true,
        type: String
    },
    roomId: {
        required: true,
        type: String
    },
    roomName: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Review', reviewSchema);