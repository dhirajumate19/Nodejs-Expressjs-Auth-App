import express from "express";
import { handleGetProfile } from "./userPRofile.controller.js";

const profileRoute = express.Router();

profileRoute.get("/profile", handleGetProfile);
export default profileRoute;
