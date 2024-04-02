import jwt from "jsonwebtoken";
import config from "../../../config/config.js";
import { createResponse } from "../../../utilities/successResponse/createReponse.js";
export const handleGetProfile = (req, res) => {
  const { authorization } = req.headers;

  let user = null;
  try {
    user = jwt.verify(authorization, "secretKey");
  } catch (error) {
    res.status(401).json(401, "Your not authorize to access this data");
  }
  res.status(200).json(createResponse(user, "This is authorize user profile"));
};
