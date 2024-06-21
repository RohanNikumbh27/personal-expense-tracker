const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "Max length of title should be 50"],
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      default: "Income",
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      // maxLength: [20, "Description Length should be 20"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", IncomeSchema);
