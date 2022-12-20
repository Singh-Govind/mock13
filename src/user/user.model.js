const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    diff: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
