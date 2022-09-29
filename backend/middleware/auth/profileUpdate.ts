import { Request,Response} from "express";
import user from "../../models/UsersModel/UserReg";
import bcrypt from "bcrypt";
import validator from "validator";

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
}
export default new Update();