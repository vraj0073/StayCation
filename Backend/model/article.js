const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Article', qaSchema);