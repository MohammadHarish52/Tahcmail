import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDb = () => {
  const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tachmail.150tzpy.mongodb.net/?retryWrites=true&w=majority&appName=tachmail`;

  if (!DB_URI) {
    console.error("No MongoDB URI provided.");
    process.exit(1);
  }
  try {
    mongoose.connect(DB_URI);
    console.log("Connected to MongoDB successfully.");
  } catch (e) {
    console.log("Error while connecting to the database", e.message);
  }
};

export default ConnectDb;
