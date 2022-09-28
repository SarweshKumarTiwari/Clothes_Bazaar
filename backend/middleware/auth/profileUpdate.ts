import { Request,Response} from "express";
import user from "../../models/UsersModel/UserReg";
import bcrypt from "bcrypt";

class Update{
    async updateUser(req:Request,res:Response){
        if (!req.body.data) {
            return res.status(400).json({error:"Bad Request"});
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
        if (!password||password.length<=0) {
            return res.status(400).json({error:"some error occured"});
        }
        try {
            const data:any=await user.findById(req.body.id);
            if (!bcrypt.compare(password,data.Password)) {
                return res.status(400).json({error:"Password is incorrect "});
            }
            await user.findOneAndUpdate({_id:req.body.id},{Password:await bcrypt.hash(req.body.data.NewPassword,8)});
            return res.json({success:"successfully updated password"})
        } catch (error) {
            return res.status(400).json({error:"some error occured"});
        }      
    }
}
export default new Update();