import mongoose,{Schema} from 'mongoose';

const UserPurchase=new Schema({
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
        required:false
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

export default mongoose.model("UserPurchase",UserPurchase);