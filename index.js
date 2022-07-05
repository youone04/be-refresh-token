import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
// import bodyParser from "body-parser";
import db from './config/Database.js';
// import Users from "./models/UserModels.js";
import router from "./routers/index.js";
dotenv.config();
const app  = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
try{
    await db.authenticate();
    console.log('Databse Connected....');
    // await Users.sync();//otomatis membuat table jika table tidak ada dalam database
}catch(error){
    console.log(error)
}
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'));
app.use(router);

app.listen(5000 , () => {
    console.log('Server running at port 5000    ')
})

// 46:44 (backend selesai)
// https://youtu.be/Ll_71n60vAM