import express from "express";
import { signIn, signUp,getUser } from "../controllers/users.js";
import verifyToken from "../middleware/auth.js";
const router = express.Router();
router.post("/signIn", signIn);
router.post("/signUp", signUp);
router.get("/",verifyToken, getUser);
export default router;
