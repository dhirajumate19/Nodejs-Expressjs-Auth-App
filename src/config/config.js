import dotenv from "dotenv";
dotenv.config();
const config = {
  secretKey: process.env.SECRET_KEY,
};
export default config;
