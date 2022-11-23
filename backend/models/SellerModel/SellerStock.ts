import mongoose,{Schema} from 'mongoose';

const SellerStocks=new Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const mod1=mongoose.model("SellerStocks",SellerStocks);
const SoldProducts=mongoose.model("Sold_Products",SellerStocks);
export default mod1
export {SoldProducts};