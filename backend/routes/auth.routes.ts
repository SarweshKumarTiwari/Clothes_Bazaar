import express, { Router } from "express";
import parser from 'body-parser';
import AuthRegister from "../middleware/auth.register";
import authLogin from "../middleware/auth.login";
import profileUpdate from "../middleware/auth/profileUpdate";

const routes: Router = express.Router();
routes.use(parser.json());

routes.post("/register", AuthRegister.verifyUsersParam,
    AuthRegister.UserAlreadyExist,
    AuthRegister.RegisterUser);

routes.post("/login/user",authLogin.checkUserType,authLogin.loginUser);
routes.get("/authorise",authLogin.authoriseUser,authLogin.show);
routes.put("/update",authLogin.authoriseUser,profileUpdate.updateUser);
routes.put("/updatepassword",authLogin.authoriseUser,profileUpdate.updatePassword);
routes.get("/showprofile",authLogin.authoriseUser,profileUpdate.showProfile);
routes.post("/forgot_password",profileUpdate.forgotPassword);
routes.post("/reset_password/:token/:id",profileUpdate.resetPassword);
routes.get('/:token/:id',profileUpdate.checkIfValid);
export default routes;
