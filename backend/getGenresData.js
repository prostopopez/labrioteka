const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        genreName: [],
        genreDescription: String,
        books_id: []
    },
    { timestamps: false }
);

module.exports = mongoose.model("genres", DataSchema);
