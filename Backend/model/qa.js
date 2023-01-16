const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question: {
        required: true,
        type: String
    },
    answer: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('QA', qaSchema);