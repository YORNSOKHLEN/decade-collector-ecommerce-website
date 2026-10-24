const router = require("express").Router();
const { createOrder, getMyOrders } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
router.use(authMiddleware);
router.post("/", createOrder);
router.get("/my", getMyOrders);
module.exports = router;
