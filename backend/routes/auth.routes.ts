import express, { Router } from "express";
import parser from 'body-parser';
import AuthRegister from "../middleware/auth/auth.register";
import authLogin from "../middleware/auth/auth.login";
import profileUpdate from "../middleware/auth/profileUpdate";

const routes: Router = express.Router();
routes.use(parser.json());

routes.post("/register", AuthRegister.verifyUsersParam,
    AuthRegister.UserAlreadyExist,
    AuthRegister.RegisterUser);

routes.post("/login",authLogin.loginUser);
routes.get("/authorise",authLogin.authoriseUser,authLogin.show);
routes.put("/update",authLogin.authoriseUser,profileUpdate.updateUser);
routes.put("/updatepassword",authLogin.authoriseUser,profileUpdate.updatePassword);

export default routes;
