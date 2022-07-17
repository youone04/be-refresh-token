import express from "express";
import { getUsers , Register ,Login ,LogOut, CreateComment, CreateTutorial, getTutorialById } from '../controller/Users.js';
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/users',verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', LogOut);

//comment
router.post('/comment' , CreateComment);
router.post('/tutorial' , CreateTutorial);
router.get('/tutorial/:id' , getTutorialById);


export default router;