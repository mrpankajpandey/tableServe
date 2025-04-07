import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getMenu,
  addItemsToMenu,
} from "../controllers/menuController.js";

const router = express.Router();

// ✅ Public Route to View Menu by URL (Customer Access)
router.get("/view/:restaurantId", getMenu);

// ✅ Owner's Dashboard - Fetch Menu (Owner Only)
router.get("/my-menu/:restaurantId", protect, getMenuItems);

// ✅ Add Menu with Items (Protected - Only Owner)
router.post("/", protect, addMenuItem);
// ✅ Add New Items to Existing Menu (Protected)
router.put("/add-items/:restaurantId", protect, addItemsToMenu);

// ✅ Update Specific Item in Menu (Protected - Only Owner)
router.put("/:itemId", protect, updateMenuItem);

// ✅ Delete Specific Item in Menu (Protected - Only Owner)
router.delete("/:itemId", protect, deleteMenuItem);

export default router;
