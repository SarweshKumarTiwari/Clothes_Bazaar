import express, { Router } from "express";
import parser from 'body-parser';
import authLogin from "../middleware/auth.login";
import cartItems from "../middleware/cart/cartItems";
import purchasedItems from "../middleware/cart/purchasedItems";

const routes: Router = express.Router();
routes.use(parser.json());

routes.post("/insertitem",authLogin.authoriseUser,cartItems.insertItem);
routes.get("/showitems",authLogin.authoriseUser,cartItems.showItems);
routes.delete("/deleteitem",authLogin.authoriseUser,cartItems.deleteItem);

routes.post("/insert_Purchaseditem",authLogin.authoriseUser,purchasedItems.insertItem);
routes.post("/insert_Purchaseditems",authLogin.authoriseUser,purchasedItems.inserManyItems);
routes.get("/show_Purchaseditems",authLogin.authoriseUser,purchasedItems.showItems);
routes.delete("/delete_Purchaseditem",authLogin.authoriseUser,purchasedItems.deleteItem);

export default routes;