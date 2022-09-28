import mongoose,{Schema} from "mongoose";

const UserSchema=new Schema({
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
        required:false
    },
    Password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("UsersInfo",UserSchema);