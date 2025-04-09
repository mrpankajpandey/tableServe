import Order from "../models/orderModel.js";
import Menu from "../models/menuModel.js";
// Get all orders for a restaurant
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// Place an order

// ✅ Place Customer Order
export const placeOrder = async (req, res) => {
  try {
    const { restaurantId, tableId, customerName, customerPhone, items } = req.body;

    // ✅ Validate Menu Items from Menu Model
    const menu = await Menu.findOne({ restaurantId });

    if (!menu) {
      return res.status(404).json({ error: "Menu not found for this restaurant" });
    }

    // ✅ Check if All Item IDs Exist in the Menu
    const itemIdsInMenu = menu.items.map((item) => item._id.toString());
    const invalidItems = items.filter((item) => !itemIdsInMenu.includes(item.itemId));

    if (invalidItems.length > 0) {
      return res.status(400).json({ error: "Invalid items in the order", invalidItems });
    }

    // ✅ Create New Order
    const newOrder = new Order({
      restaurantId,
      tableId,
      customerName,
      customerPhone,
      items,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", newOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to place order" });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json({ message: "Order status updated", updatedOrder });
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
};
