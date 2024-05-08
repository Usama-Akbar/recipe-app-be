import dotenv from 'dotenv';
dotenv.config();
import { mongoose } from "mongoose";
export const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("😀😀😀😀😀😀 Connected to Database 😀😀😀😀😀😀😀😀😀😀😀😀😀😀");

    } catch (error) {
        console.log(error);
    }


}


