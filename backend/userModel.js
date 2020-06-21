const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: String,
        password: String
    },
    { timestamps: false }
);

module.exports = mongoose.model('user', User);
