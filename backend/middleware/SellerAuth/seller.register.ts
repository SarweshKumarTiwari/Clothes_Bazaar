import { Request, Response, NextFunction } from "express";
import validator from "validator";
import bcrypt from 'bcrypt';
import token from "../token";
import dotenv from 'dotenv';
import SellerAuth from '../../models/SellerModel/SellerData'
dotenv.config();

class AuthRegistration {
    async verifyUsersParam(req: Request, res: Response, next: NextFunction) {
        let error: string='';
        if (!req.body.name || !req.body.email || !req.body.password ||!req.body.pincode ||!req.body.address) {
            error+="Please check some field is empty\n";
        }
        if (req.body.password && req.body.email) {
            if (!validator.isEmail(req.body.email)) {
                error+="Email is Not Valid\n";
            }
            if (!validator.isStrongPassword(req.body.password)) {
                error+="Password is not strong";
            }
        }
        if (error.length > 0) {
            return res.json({ error: error });
        }
        else {
            return next();
        }
    }

    async UserAlreadyExist(req: Request, res: Response, next: NextFunction) {
        if ((await SellerAuth.find({ Email: req.body.email })).length > 0) {
            return res.json({ error: "User Already Exists " });
        }
        else {
            return next();
        }
    }

    async RegisterUser(req: Request, res: Response, next: NextFunction) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 8);
            const data = new SellerAuth({
                Name: req.body.name,
                Email: req.body.email,
                Password: req.body.password,
                Address:req.body.address,
                Pincode:req.body.pincode
            });
            data.save().then(saved=>{
                
                if (saved===data) {
                    const tok:string=token.generateToken(saved,process.env.AUTH_TOKEN as string);
                    res.cookie("cookie",tok);
                    return res.status(201).json({success:"successfully saved data",token:tok});
                }
            });
        } catch (error) {
            return res.status(400).json({error:"There in an error in server"})
        }
    }
}

export default new AuthRegistration();