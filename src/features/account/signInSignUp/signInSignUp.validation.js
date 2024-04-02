import { users } from "../../../../app.js";
import { createResponse } from "../../../utilities/ErrorResponse/createResponse.js";
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateData = (data) => {
  if (!data || data.trim() === 0) {
    return false;
  }
  return true;
};
export const validateUserSignUpDetail = (req, res, next) => {
  const { userName, userEmail, userPassword, userGender } = req.body;

  if (!validateData(userName)) {
    res.status(400).json(createResponse(400, "Plaease Check User Name"));
  }
  if (!validateData(userEmail) || !validateEmail(userEmail)) {
    res.status(400).json(createResponse(400, "Plaease Check User Email"));
  }
  if (!validateData(userPassword) || userPassword.length === 0) {
    res.status(400).json(createResponse(400, "Plaease Check User Password"));
  }
  if (!validateData(userGender)) {
    res.status(400).json(createResponse(400, "Plaease Check User gender"));
  }
  next();
};

export const validateUserSignIn = (req, res, next) => {
  const { userEmail, userPassword } = req.body;
  //usig map destructure user object keys for comaparision
  const userEmailAlready = users.map((user) => user.userEmail);
  const userPasswordAlready = users.map((user) => user.userPassword);

  if (!validateData(userEmail) || !validateEmail(userEmail)) {
    return res
      .status(401)
      .json(createResponse(401, "Enter Email or Email  is not valid"));
  }
  if (!validateData(userPassword) || userPassword.length === 0) {
    return res.status(401).json(createResponse(401, "Enter password"));
  }

  if (
    !userEmailAlready.includes(userEmail) ||
    !userPasswordAlready.includes(userPassword)
  ) {
    return res
      .status(401)
      .json(
        createResponse(401, "Email or Password does not match with you tried")
      );
  }

  next();
};
