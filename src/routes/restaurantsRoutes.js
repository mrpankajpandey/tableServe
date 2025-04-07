import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { checkRole } from "../middleware/roleMiddleware.js";
import { getRestaurant, updateKYC, approveKYC, createRestaurant } from "../controllers/restaurantsController.js";

const router = express.Router();
// ✅ Create Restaurant (Only Owner Can Create)
router.post("/", protect, createRestaurant);

// Get Restaurant Details (Only Owner/Admin)
router.get("/", protect, getRestaurant);


// Update KYC (Owner Only)
router.put("/kyc", protect, updateKYC);

// Approve KYC (Only Admin)
router.put("/approve/:id", protect, checkRole("admin"), approveKYC);

export default router;
