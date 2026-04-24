const express = require("express");
const router = express.Router();

const { generateRoadmap, getMyRoadmap } = require("../controllers/roadmapController");
const authMiddleware = require("../middleware/authMiddleware");

// Generate roadmap (protected)
router.post("/generate-roadmap", authMiddleware, generateRoadmap);

// Get user's roadmap (protected)
router.get("/my-roadmap", authMiddleware, getMyRoadmap);

module.exports = router;

