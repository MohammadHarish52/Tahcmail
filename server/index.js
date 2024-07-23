import express from "express";

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); //logging the server is running on port 3000
});
