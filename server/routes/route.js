import express from "express";

import { saveSentEmails } from "../controller/emailController.js";

const routes = express.Router();

routes.post("/save", saveSentEmails);

export default routes;
