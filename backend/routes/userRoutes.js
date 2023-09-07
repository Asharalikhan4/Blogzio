import express from "express";
const router = express.Router();

import { loginUser, registerUser, updateProfile, userProfile } from "../controllers/userController";
import { authGuard } from "../middlewares/authMiddleware";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateProfile);

export default router;