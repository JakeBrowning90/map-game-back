const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, },
    score: { type: Number,},
}, {toJSON: { virtuals: true }});

module.exports = mongoose.model("User", UserSchema);