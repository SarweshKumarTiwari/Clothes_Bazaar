import express, { Router } from "express";
import parser from 'body-parser';
import AuthRegister from "../middleware/SellerAuth/seller.register";
import authLogin from "../middleware/SellerAuth/seller.login";
import InStockCrud from '../middleware/SellerAuth/seller.crud';
import Update from '../middleware/Clothing/clothing'

const routes: Router = express.Router();
routes.use(parser.json());

routes.post("/registerseller", AuthRegister.verifyUsersParam,
    AuthRegister.UserAlreadyExist,
    AuthRegister.RegisterUser);

routes.post("/loginseller",authLogin.loginUser);
routes.get("/authorise",authLogin.authoriseUser,authLogin.show);
routes.post("/fillstock",authLogin.authoriseUser,InStockCrud.insertItem);
routes.get("/iteminstock",authLogin.authoriseUser,InStockCrud.showItems);
routes.get("/:category",Update.upload);
routes.delete("/reducestock",authLogin.authoriseUser,InStockCrud.deleteItem);

export default routes;
