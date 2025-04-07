import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  items: [
    {
      name: { type: String, required: true }, // Dish Name
      category: { type: String, enum: ["veg", "non-veg"], required: true },
      price: { type: Number, required: true },
      type: { type: String, enum: ["half", "full", "special"], default: "full" },
      description: String,
    },
  ],
});

export default mongoose.model("Menu", menuSchema);
