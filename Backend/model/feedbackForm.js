const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: {
        required: true,
        type: String
    },
    topic: {
        required: true,
        type: String
    },
    detail: {
        required: true,
        type: String
    },
    userEmail: {
        type: String
    }
})

module.exports = mongoose.model('FeedbackForm', qaSchema);