const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        _id: String,
        collectionName: String,
        collectionDescription: String,
        books_id: []
    },
    { timestamps: false }
);

module.exports = mongoose.model("collections", DataSchema);
