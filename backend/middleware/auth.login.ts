import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcrypt";
import users from "../db/entities/appUser";
import token from './token';
import dotenv from 'dotenv';
dotenv.config();

class AuthUser {
    async checkUserType(req: Request, res: Response, next: NextFunction) {
        const data: any = await users.findOne({ Email: req.body.email });
        if (!data) {
            return res.json({ error: "Email or password is incorrect" });
        }
        const url: String[] = req.url.split('/');
        if (url[url.length-1]!==data.UserType) {
            return res.json({ error: "A user cannot get logged in seller's account" });
        }
        next();
    }
    async loginUser(req: Request, res: Response) {
        if (!req.body.email || !req.body.password || req.body.email.length === 0 || req.body.password.length === 0) {
            return res.json({ error: "Please enter email or password" })
        }
        const data: any = await users.findOne({ Email: req.body.email });
        if (!data || !await bcrypt.compare(req.body.password, data.Password)) {
            return res.json({ error: "Email or password is incorrect" });
        }
        return res.status(200).json({ token: token.generateToken(data, process.env.AUTH_TOKEN as string), success: "succesfully logged In" });

    }
    async authoriseUser(req: Request, res: Response, next: NextFunction) {
        const token1 = req.headers["authorization"];
        if (!token1) {
            return res.json({ error: "Bad Request" })
        }
        const payload = token1 && token1.split(" ")[1];
        const data: any = token.verifyToken(payload, process.env.AUTH_TOKEN as string);
        if (data.length <= 0) {
            return res.status(400).json({ error: "Bad Request" });
        }
        if (data.error) {
            return res.status(401).json({ error: data.error });
        }
        req.body.id = data._id;
        return next();
    }

    async show(req: Request, res: Response) {
        return res.json({ success: "This is Authorised User" });
    }
}
export default new AuthUser();