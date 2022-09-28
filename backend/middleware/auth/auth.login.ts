import {Request,Response,NextFunction} from 'express';
import bcrypt from "bcrypt";
import users from "../../models/UsersModel/UserReg";
import token from '../token';

class AuthUser{
    async loginUser(req:Request,res:Response,next:NextFunction){
        if (!req.body.email||!req.body.password||req.body.email.length===0||req.body.password.length===0) {
            return res.json({error:"Please enter email or password"})
        }
        const data:any=await users.findOne({Email:req.body.email});
        if (!data||!await bcrypt.compare(req.body.password,data.Password)) {
            return res.json({error:"Email or password is incorrect"});
        }
        return res.status(200).json({token:token.generateToken(data),success:"succesfully logged In"});

    }
    async authoriseUser(req:Request,res:Response,next:NextFunction) {
        const token1=req.headers["authorization"];
        if (!token1) {
            return res.status(401).json({error:"Bad Request"})
        }
        const payload=token1&&token1.split(" ")[1];
        const data:any=token.verifyToken(payload);
        if (data.length<=0) {
            return res.status(400).json({error:"Bad Request"});
        }
        if (data.error) {
            return res.status(401).json({error:data.error});
        }
        req.body.id=data._id;
        return next();
    }

    async show(req:Request,res:Response){
        return res.json({success:"This is Authorised User"});
    }
}
export default new AuthUser();