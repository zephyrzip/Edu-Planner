const express = require("express");
const router = express.Router();

const { registerUser, loginUser, verifyOTP } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

// 🔥 NEW OTP ROUTE
router.post("/verify-otp", verifyOTP);

// Protected route (unchanged)
router.get("/profile", protect, (req, res) => {
    res.json({
        message: "You accessed protected route",
        user: req.user
    });
});

module.exports = router;