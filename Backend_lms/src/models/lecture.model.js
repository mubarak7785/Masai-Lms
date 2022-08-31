const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Instructor: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: false },
    optional: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("lecture", lectureSchema);
