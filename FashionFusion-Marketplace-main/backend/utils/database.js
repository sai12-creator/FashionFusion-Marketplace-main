
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path: ".env"
})

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected Successsfully");
    } catch (error) {
        console.log("Error connecting to database:", error);
    }
};

export default databaseConnection;