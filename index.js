import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
// import bodyParser from "body-parser";
import db from './config/Database.js';
import {User , Role} from "./models/UserModels.js";
import router from "./routers/index.js";
import { Tutorial , Comment } from "./models/TutorialModels.js";
dotenv.config();
const app  = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
try{
    await db.authenticate();
    console.log('Databse Connected....');
    // await User.sync();//otomatis membuat table jika table tidak ada dalam database
    // await Role.sync()
    // await Tutorial.sync()
    // await Comment.sync()
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

app.listen(8800 , () => {
    console.log('Server running at port 8800    ')
})
// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
// 46:44 (backend selesai)
// https://youtu.be/Ll_71n60vAM

// https://www.bezkoder.com/sequelize-associate-one-to-many/