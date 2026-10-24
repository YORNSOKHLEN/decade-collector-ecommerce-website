const mongoose = require("mongoose");
// async function connectDB() {
//   if (!process.env.MONGODB_URI)
//     throw new Error("MONGODB_URI is missing in .env");
//   const conn = await mongoose.connect(process.env.MONGODB_URI);
//   console.log(`MongoDB connected: ${conn.connection.host}`);
// }

async function connectDB() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured");
  }

  await mongoose.connect(process.env.MONGODB_URI);

  console.log("MongoDB connected successfully");
}

module.exports = connectDB;
