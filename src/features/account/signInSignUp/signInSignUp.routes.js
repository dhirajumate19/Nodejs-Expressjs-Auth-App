import express from "express";
import {
  handleGetAllUser,
  handleSignIn,
  handlerSignUp,
} from "./signInSignUp.controller.js";
import {
  validateUserSignIn,
  validateUserSignUpDetail,
} from "./signInSignUp.validation.js";

const userRoute = express.Router();

userRoute.get("/allusers", handleGetAllUser);

userRoute.post("/signup", validateUserSignUpDetail, handlerSignUp);

userRoute.post("/signin", validateUserSignIn, handleSignIn);
export default userRoute;
