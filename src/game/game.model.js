const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
  score: { type: Number },
  scored_by: { type: Schema.Types.ObjectId, ref: "user" },
});

const Score = model("score", scoreSchema);

module.exports = Score;
