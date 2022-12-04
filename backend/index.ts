import express,{Application,Request,Response,NextFunction} from 'express';
import dotenv from 'dotenv';
import connect from './connectDB';
import userRoutes from './routes/auth.routes';
import cartRoutes from './routes/cart.routes';
import sellerRoutes from './routes/seller.routes';
import cookieParser from 'cookie-parser';

dotenv.config();
connect();


const app:Application=express();
const port:string=process.env.PORT as string||"4000";

app.use(function(req:Request,res:Response,next:NextFunction){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', ['Content-Type','Authorization',"Accept"]);
    next();

})
app.use(cookieParser())
app.use(userRoutes);
app.use(cartRoutes);
app.use(sellerRoutes);

app.listen(port,()=>{console.log(`Server is running at port ${port}`)});



