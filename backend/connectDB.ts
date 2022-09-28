import mongoose from 'mongoose';

const URI:string="mongodb://localhost:27017/clothes_bazaar";

const connectUser=()=>{
    mongoose.connect(URI,()=>{
        try {
            console.log("Succesfully connected to DB")
        } catch (error) {
            console.log(error);
        }
    })
}

export default connectUser;