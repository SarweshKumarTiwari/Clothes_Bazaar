import { Response,Request } from "express";
import Cart from "../../models/UsersModel/UserCart";

class CartOps{
    async insertItem(req:Request,res:Response){
        try {
            if (req.body==={}) {
                return res.status(400).json({error:"no input data"});
            }
            if (!req.body.title||!req.body.quantity
                ||!req.body.price||!req.body.category||!req.body.image){

                    return res.status(400).json({error:"no input data"});
            }
            new Cart(req.body).save().then(e=>{
                return res.status(201).json({data:e})
            }).catch(err=>{
                return res.status(400).json({error:err})
            })
        } catch (error) {
            return res.status(500).json({error:error})
        }
    }

    async showItems(req:Request,res:Response){
        try {
            if (!req.body.id) {
                return res.status(400).json({error:"no input data"});
            }
            const data=await Cart.find({id:req.body.id});
            return res.status(200).json({success:"successfully fetched data",data:data});       
        } catch (error) {
            return res.status(500).json({error:error})
        }
    }

    async deleteItem(req:Request,res:Response) {
        try {
            if (!req.body.product_id) {
                return res.status(400).json({error:"No valid id"})
            }
            await Cart.findByIdAndDelete(req.body.product_id);
            return res.status(200).json({success:"successfully deleted"});
        } catch (error) {
            return res.status(500).json({error:error})        
        }
    }
}

export default new CartOps();