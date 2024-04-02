import Express from "express";
import userRoute from "./src/features/account/signInSignUp/signInSignUp.routes.js";
import profileRoute from "./src/features/account/profile/userProfile.routes.js";
const app = Express();
const PORT = 4001;
export let users = [];

app.use(Express.json());
//This route for user sign in / sign up
app.use("/users", userRoute);
//This route for user profile
app.use("/users", profileRoute);

app.listen(PORT, () => {
  console.log(`the surver is running up on https://localhost:${PORT}`);
});
