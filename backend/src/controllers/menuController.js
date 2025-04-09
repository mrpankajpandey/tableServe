import Menu from "../models/menuModel.js";

// ✅ Owner's Dashboard Menu (Only Owner Access)
export const getMenuItems = async (req, res) => {
  try {
    const menu = await Menu.find({ restaurantId: req.params.restaurantId });

    if (!menu.length) {
      return res.status(404).json({
        message: "No menu available for this restaurant.",
      });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
};

// ✅ Add Menu with Multiple Items & Generate Public URL
export const addMenuItem = async (req, res) => {
  try {
    const { restaurantId, items } = req.body;
   
    // Check if Menu Already Exists for Restaurant
    const existingMenu = await Menu.findOne({ restaurantId });
    if (existingMenu) {
      return res
        .status(400)
        .json({ error: "Menu already exists for this restaurant." });
    }

    // Create New Menu with Items
    const menu = new Menu({ restaurantId, items });
    await menu.save();

    // Generate Public URL for Menu (QR or URL for Customers)
    const menuUrl = `${process.env.BASE_URL}/api/menu/view/${menu.restaurantId}`;

    res.status(201).json({
      message: "Menu created successfully",
      menu,
      menuUrl, // ✅ Return Public URL
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create menu" });
    
  }
};

// ✅ Update Menu Item (By Item ID)
export const updateMenuItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { name, category, price, type, description } = req.body;

    const menu = await Menu.findOne({ "items._id": itemId });

    if (!menu) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    // Update the Item Fields
    const item = menu.items.id(itemId);
    if (item) {
      item.name = name || item.name;
      item.category = category || item.category;
      item.price = price || item.price;
      item.type = type || item.type;
      item.description = description || item.description;

      await menu.save();
      return res.status(200).json({ message: "Menu item updated successfully", item });
    }

    res.status(404).json({ message: "Menu item not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update menu item" });
  }
};

// ✅ Delete Menu Item (By Item ID)
export const deleteMenuItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const menu = await Menu.findOneAndUpdate(
      { "items._id": itemId },
      { $pull: { items: { _id: itemId } } },
      { new: true }
    );

    if (!menu) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.status(200).json({ message: "Menu item deleted successfully", menu });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete menu item" });
  }
};

// ✅ Public Route for Viewing Menu (Public Access for Customers)
export const getMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const menu = await Menu.find({ restaurantId });

    if (!menu.length) {
      return res
        .status(404)
        .json({ message: "No menu available for this restaurant." });
    }

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: "Error fetching menu" });
  }
};


// ✅ Add New Items to Existing Menu
export const addItemsToMenu = async (req, res) => {
  try {
    const { restaurantId, newItems } = req.body;

    // Check if Menu Exists for Restaurant
    const menu = await Menu.findOne({ restaurantId });
    if (!menu) {
      return res
        .status(404)
        .json({ message: "Menu not found for this restaurant." });
    }

    // Push New Items to Existing Menu
    menu.items.push(...newItems);
    await menu.save();

    res.status(200).json({
      message: "New items added successfully",
      menu,
    });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "Failed to add items to menu" });
  }
};