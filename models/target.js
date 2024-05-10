const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TargetSchema = new Schema(
  {
    name: { type: String },
    location: { type: Array, default: undefined },
  },
  { toJSON: { virtuals: true } }
);

module.exports = mongoose.model("Target", TargetSchema);
