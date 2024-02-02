import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connection Database Suceffuly")
    } catch (error) {
        console.log(error.message);
    }
}

export async function disconnectDb(){
    await mongoose.disconnect();
}