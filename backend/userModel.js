const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        id: Number,
        username: String,
        password: String
    },
    { timestamps: false }
);

module.exports = mongoose.model('users', User);
