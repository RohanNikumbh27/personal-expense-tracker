const mongoose = require("mongoose");

const url = process.env.MONGO_URL;

const connectToDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connected");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

module.exports = { connectToDB };
