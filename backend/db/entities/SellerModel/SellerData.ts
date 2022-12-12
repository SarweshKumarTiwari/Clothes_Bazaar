import mongoose,{Schema} from "mongoose";

const SellerSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:false
    },
    Address:{
        type:String,
        required:true
    },
    Pincode:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:false
    },
    Date:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("SellerInfo",SellerSchema);