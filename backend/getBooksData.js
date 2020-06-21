const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        _id: String,
        bookName: String,
        bookPrice: Number,
        bookPublisher: String,
        bookPubDate: Number,
        bookRating: Number,
        bookImg: String,
        bookDescription: String
    },
    { timestamps: false }
);

module.exports = mongoose.model("books", DataSchema);
