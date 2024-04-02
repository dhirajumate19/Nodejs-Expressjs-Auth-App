import Express from "express";
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
import { users } from "../../../../app.js";
import { createResponse } from "../../../utilities/successResponse/createReponse.js";
import config from "../../../config/config.js";

//Handle get ALl user detail
export const handleGetAllUser = (req, res) => {
  res
    .status(200)
    .json(
      createResponse(
        { users, TotalUsersLength: users.length },
        "All Users data"
      )
    );
};
//handle sign up get from req body and add new object and then push USERS object
export const handlerSignUp = (req, res) => {
  const { userName, userEmail, userPassword, userGender } = req.body;
  const newUser = {
    id: uuid(),
    userName,
    userEmail,
    userPassword,
    userGender,
  };
  users.push(newUser);

  res.status(201).json(createResponse(newUser, "User created Successfully"));
};

//Handle sign in get data from req body and generate token
export const handleSignIn = (req, res) => {
  const { userEmail, userPassword } = req.body;
  const userToken = jwt.sign({ id: "123poop" }, "secretKey");
  return res
    .status(200)
    .json(
      createResponse(
        { Token: userToken, userEmail: userEmail },
        "User Logged in "
      )
    );
};
