import express from "express";
import { registerUser, userLogin } from '../Controllers/userController.js';
const router = express.Router();

router.post('/user/register', registerUser);
router.post('/user/login', userLogin)

export default router;