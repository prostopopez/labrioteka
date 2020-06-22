const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        authorName: String,
        authorBirthYear: Number,
        authorDeathYear: Number,
        authorImg: String,
        authorResume: String,
        books_id: []
    },
    { timestamps: false }
);

module.exports = mongoose.model("authors", DataSchema);
