import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class Token{
    generateToken(data:any) {
        data=data.toJSON();
        if (data.length===0) {
            return "There is no data";
        }
        const token:string=process.env.AUTH_TOKEN as string;
        const payload=jwt.sign(data,token);
        return payload;
    }
    verifyToken(token:any){
        try {
            if (!token) {
                return {error:"invalid credentials"};
            }
            const data=jwt.verify(token,process.env.AUTH_TOKEN as string);
            return data;    
        } catch (error) {
            return {error:error};
        }
    }
}

export default new Token();