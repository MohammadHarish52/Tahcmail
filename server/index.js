import express from "express";
import cors from "cors";
import ConnectDb from "./database/db.js";
import dotenv from "dotenv";
import routes from "./routes/route.js";
dotenv.config();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

const PORT = 8000;

ConnectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); //logging the server is running on port 3000
});
