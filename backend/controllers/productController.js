const Product = require("../models/Product");
exports.getProducts = async (req, res, next) => {
  try { res.json({ products: await Product.find({ isActive: true }).sort({ createdAt: -1 }) }); }
  catch (error) { next(error); }
};
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, isActive: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (error) { next(error); }
};
