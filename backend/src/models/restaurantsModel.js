import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  tables: Number,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  kycStatus: { type: String, enum: ["pending", "approved"], default: "pending" },
});

export default mongoose.model("Restaurant", restaurantSchema);
