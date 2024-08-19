import express from "express";

import {
  saveSentEmails,
  getEmails,
  saveBinEmails,
} from "../controller/emailController.js";

const routes = express.Router();

routes.post("/save", saveSentEmails);
routes.get("/emails/:type", getEmails);
routes.post("/save-draft", saveSentEmails);
routes.post("/bin", saveBinEmails);

export default routes;
