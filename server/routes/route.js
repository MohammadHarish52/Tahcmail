import express from "express";

import {
  saveSentEmails,
  getEmails,
  saveBinEmails,
  toggleStarEmails,
  deleteEmail,
} from "../controller/emailController.js";

const routes = express.Router();

routes.post("/save", saveSentEmails);
routes.get("/emails/:type", getEmails);
routes.post("/save-draft", saveSentEmails);
routes.post("/bin", saveBinEmails);
routes.post("/starred", toggleStarEmails);
routes.delete("/delete", deleteEmail);

export default routes;
