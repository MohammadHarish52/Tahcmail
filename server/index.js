import express from "express";
import ConnectDb from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 8000;

ConnectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); //logging the server is running on port 3000
});
