import Restaurant from "../models/restaurantsModel.js";



// ✅ Create New Restaurant (Only Owner Can Access)
export const createRestaurant = async (req, res) => {
  try {
    // Check Role - Only "owner" Can Create
    if (req.user.role !== "owner") {
      return res.status(403).json({ error: "Unauthorized Access" });
    }
     
    const { name, address, phone, tables } = req.body;
    
    // ✅ Check If Restaurant Already Exists
    const existingRestaurant = await Restaurant.findOne({ ownerId: req.user._id });

    if (existingRestaurant) {
      return res.status(400).json({ error: "You already have a restaurant created." });
    }

    // ✅ Create New Restaurant
    const restaurant = new Restaurant({
      name,
      address,
      phone,
      tables,
      ownerId: req.user._id,
      kycStatus: "pending", // KYC Will be 'pending' Initially
    });

    await restaurant.save();

    res.status(201).json({
      message: "Restaurant created successfully. KYC is pending for approval.",
      restaurant,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create restaurant" });
  }
};

// Get restaurant details
export const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ ownerId: req.user._id });
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch restaurant" });
  }
};

// Update KYC details
export const updateKYC = async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { ownerId: req.user._id },
      { ...req.body, kycStatus: "pending" },
      { new: true }
    );
    res.json({ message: "KYC details submitted", updatedRestaurant });
  } catch (error) {
    res.status(500).json({ error: "KYC update failed" });
  }
};

// Approve KYC (Admin only)
export const approveKYC = async (req, res) => {
  try {
    if (req.user.role !== "admin") return res.status(403).json({ error: "Unauthorized" });

    const approvedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, { kycStatus: "approved" }, { new: true });
    res.json({ message: "KYC Approved", approvedRestaurant });
  } catch (error) {
    res.status(500).json({ error: "Approval failed" });
  }
};
