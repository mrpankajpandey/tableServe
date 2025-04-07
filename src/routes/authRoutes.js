import express from "express";
import { ownerSignup, ownerLogin, adminLogin } from "../controllers/authController.js";

const router = express.Router();

// Owner Signup & Login
router.post("/signup", ownerSignup);
router.post("/login", ownerLogin);


// Admin Login
router.post("/admin/login", adminLogin);

export default router;
