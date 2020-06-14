let mongoose = require('mongoose');

let books = new mongoose.Schema({
    rank: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('books', books);