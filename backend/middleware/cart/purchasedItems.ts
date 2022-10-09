import { Response,Request } from "express";
import Purchase from "../../models/UsersModel/UsersPurchase";

function ArrangeItems(data:{data:any[],id:string}) {
    if(data.data.length<=0||!data.id){
        return false;
    }
    data.data.forEach(element => {
        element.id=data.id;
    });
    return data.data;
}

class PurchaseOps{
    async insertItem(req:Request,res:Response){
        try {
            if (!req.body.title||!req.body.quantity
                ||!req.body.price||!req.body.category||!req.body.image){

                    return res.status(400).json({error:"no input data"});
            }
            new Purchase(req.body).save().then(e=>{
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
            const data=await Purchase.find({id:req.body.id});
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
            await Purchase.findByIdAndDelete(req.body.product_id);
            return res.status(200).json({success:"successfully deleted"});
        } catch (error) {
            return res.status(500).json({error:error})        
        }
    }

    async inserManyItems(req:Request,res:Response){
        if(req.body.data.length<=0){
            return res.json({error:"No item Found please check"});
        }
        try {
            const data=ArrangeItems(req.body);
            if (!data) {
                return res.json({error:"No data found"});
            }
            await Purchase.insertMany(data).then(()=>{
                return res.status(201).json({success:"Successfully Inserted all Items"});
            }).catch(err=>{
                return res.json({error:err});
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({error:error});
        }
    }
}

export default new PurchaseOps();