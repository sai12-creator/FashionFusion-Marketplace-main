
import express from 'express';
import dotenv from 'dotenv'
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import useRoute from './routes/user.js';
import cors from 'cors'

dotenv.config({
    path: ".env"
})

databaseConnection();

const port = process.env.PORT;
const app = express();

const corsOption = {
    origin : "http://localhost:5173",
    credentials : true
}

app.use(cors(corsOption))
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/user' , useRoute);




app.listen(port , () => {
    console.log(`server is listing on ${port}`);
})