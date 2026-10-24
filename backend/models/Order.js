const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    name: { type: String, required: true }, quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 } }],
  shippingAddress: { fullName: String, phone: String, address: String, city: String, country: String },
  totalPrice: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ["pending","paid","processing","shipped","delivered","cancelled"], default: "pending" }
}, { timestamps: true });
module.exports = mongoose.model("Order", orderSchema);
