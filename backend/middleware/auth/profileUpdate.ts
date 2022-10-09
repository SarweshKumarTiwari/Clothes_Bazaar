import { Request,Response} from "express";
import user from "../../models/UsersModel/UserReg";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

class Update{
    async updateUser(req:Request,res:Response){
        if (!req.body.data) {
            return res.json({error:"Bad Request"});
        }
        try {
            await user.findOneAndUpdate({_id:req.body.id},req.body.data);
            return res.status(200).json({success:"Updated info successfully"});   
        } catch (error) {
            return res.status(400).json({error:"some error occured"});
        }
    }

    async updatePassword(req:Request,res:Response){
        const password=req.body.data.Password;
        if (!password||!req.body.data.NewPassword||password.length<=0) {
            return res.json({error:"some error occured"});
        }
        if(!validator.isStrongPassword(req.body.data.NewPassword)){
            return res.json({error:"Password is Not Strong"});
        }
        if (password===req.body.data.NewPassword) {
            return res.json({error:"New password could not be same"});
        }
        try {
            const data:any=await user.findById(req.body.id);
            if (!await bcrypt.compare(password,data.Password)) {
                return res.json({error:"Password is incorrect "});
            }
            await user.findOneAndUpdate({_id:req.body.id},{Password:await bcrypt.hash(req.body.data.NewPassword,8)});
            return res.json({success:"successfully updated password"})
        } catch (error) {
            return res.status(400).json({error:"some error occured"});
        }      
    }
    
    async showProfile(req:Request,res:Response){
        if (!req.body.id) {
            return res.json({error:"Not able to fetch data"});
        }
        try {
            const data:any=await user.findById(req.body.id)
            return res.status(200).json({success:"Fetched successfully",data:data})
        } catch (error) {
            return res.status(400).json({error:error});
        }
    }

    async forgotPassword(req:Request,res:Response){
        if (!req.body.email) {
            return res.json({error:"Not Found email"});
        }
        if (!validator.isEmail(req.body.email)) {
            return res.json({error:"Plese Enter valid Email"});
        }
        const data=await user.findOne({Email:req.body.email});
        if (!data) {
            return res.json({error:"Not Found email"});
        }
        const uri:string=jwt.sign(data.toJSON(),process.env.AUTH_TOKEN as string + data.Password,{expiresIn:"1m"});
        console.log(`http://localhost:3000/reset_password/${uri}/${data._id}`);
        return res.json(`http://localhost:4000/reset_password/${uri}/${data._id}`);
    }

    async resetPassword(req:Request,res:Response){
        if (!req.params.id||!req.params.token) {
            return res.json({error:"Did not get id or token"})
        }
        if(!validator.isStrongPassword(req.body.password)){
            return res.json({error:"Password is Not Strong"});
        }
        try {
            const data=await user.findById(req.params.id);
            const Password=!data?"":data.Password
            jwt.verify(req.params.token,process.env.AUTH_TOKEN as string+Password);
            await user.findByIdAndUpdate(req.params.id,{Password: await bcrypt.hash(req.body.password,8)}).then(doc=>{
               return res.json({success:"successfully changed password"});
            }).catch(()=>{
                return res.status(400).json({error:"there some error occured"});
            })    
        } catch (err) {
            return res.json({error:"There some problem occured"});
        }
    }
    async checkIfValid(req:Request,res:Response){
        try {
            const data=await user.findById(req.params.id);
            const Password=!data?"":data.Password
            jwt.verify(req.params.token,process.env.AUTH_TOKEN as string+Password);
            return res.json({valid:"This link  is valid"})
        } catch (error) {
            return res.json({error:"this link is not valid"});
        }
    }
}
export default new Update();