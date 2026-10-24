const jwt = require("jsonwebtoken");
const User = require("../models/User");
module.exports = async function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(401).json({ message: "Authentication required" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("_id role");
    if (!user) return res.status(401).json({ message: "Invalid user" });
    req.user = { id: user._id.toString(), role: user.role };
    next();
  } catch (error) { res.status(401).json({ message: "Invalid or expired token" }); }
};
