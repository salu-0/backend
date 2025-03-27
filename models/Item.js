const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Item", itemSchema);