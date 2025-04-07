import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getOrders, placeOrder, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();

// Get Orders (For Owner/Admin)
router.get("/", protect, getOrders);

// Place Order (Public - No Auth Required)
router.post("/", placeOrder);

// Update Order Status (Only Owner/Admin)
router.put("/:id", protect, updateOrderStatus);

export default router;
