const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
  }
};

module.exports = connectDb;
