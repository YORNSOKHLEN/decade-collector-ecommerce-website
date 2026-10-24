const Order = require("../models/Order");
const Product = require("../models/Product");
exports.createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress } = req.body;
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ message: "Order items are required" });
    const orderItems = [];
    let totalPrice = 0;
    for (const item of items) {
      const quantity = Number(item.quantity);
      if (!Number.isInteger(quantity) || quantity < 1) return res.status(400).json({ message: "Invalid quantity" });
      const product = await Product.findOne({ _id: item.product, isActive: true });
      if (!product || product.stock < quantity) return res.status(400).json({ message: "Product unavailable or insufficient stock" });
      orderItems.push({ product: product._id, name: product.name, quantity, price: product.price });
      totalPrice += product.price * quantity;
    }
    const order = await Order.create({ user: req.user.id, items: orderItems, shippingAddress, totalPrice });
    res.status(201).json({ order });
  } catch (error) { next(error); }
};
exports.getMyOrders = async (req, res, next) => {
  try { res.json({ orders: await Order.find({ user: req.user.id }).sort({ createdAt: -1 }) }); }
  catch (error) { next(error); }
};
