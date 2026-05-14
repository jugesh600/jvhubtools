import express from "express";

import {
  registerUser,
  verifyOTP,
  loginUser,
  logoutUser
} from "../controller/UserController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify-otp", verifyOTP);
router.post("/logout", logoutUser); // NEW



export default router;