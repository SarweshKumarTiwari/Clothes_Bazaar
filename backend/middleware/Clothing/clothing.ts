import { Response,Request } from "express";
import SellerStock from '../../db/entities/SellerModel/SellerStock';

class UploadClothes{
    async upload(req:Request,res:Response){
        try {
            if (!req.params.category) {
                return res.json({error:"Not found any category"});
            }
            SellerStock.find({category:req.params.category},(err:Error,doc:Object[])=>{
                if (!err) {
                    return res.json({data:doc});
                }
                else{
                    return res.json({error:err});
                }
            });
        } catch (error) {
            return res.json({error:error});
        }
    }
}
export default new UploadClothes();