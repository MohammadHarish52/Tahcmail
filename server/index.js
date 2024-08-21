import express from "express";
import cors from "cors";
import ConnectDb from "./database/db.js";
import dotenv from "dotenv";
import routes from "./routes/route.js";
import path from "path";
dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || 8000;

ConnectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
