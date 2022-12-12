import express, { Router } from "express";
import parser from 'body-parser';
import AuthRegister from "../middleware/auth.register";
import authLogin from "../middleware/auth.login";
import InStockCrud from '../middleware/SellerAuth/seller.crud';
import Update from '../middleware/Clothing/clothing'

const routes: Router = express.Router();
routes.use(parser.json());

routes.post("/registerseller", AuthRegister.verifySellersParam,
    AuthRegister.UserAlreadyExist,
    AuthRegister.RegisterUser);

routes.post("/login/seller",authLogin.checkUserType,authLogin.loginUser);
routes.get("/authoriseseller",authLogin.authoriseUser,authLogin.show);
routes.post("/fillstock",authLogin.authoriseUser,InStockCrud.insertItem);
routes.get("/iteminstock",authLogin.authoriseUser,InStockCrud.showItems);
routes.get("/:category",Update.upload);
routes.delete("/reducestock",authLogin.authoriseUser,InStockCrud.deleteItem);

export default routes;
