const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const {
  uploadFile,
  getAllFiles,
  getFileById,
  downloadFile,
  deleteFile,
  getFilesByUser,
  getFilesByRole,
  previewFile
} = require("../controllers/fileController");

// Upload file to MongoDB
router.post("/upload", upload.single("file"), uploadFile);

// Get all files (metadata only)
router.get("/", getAllFiles);

// Get file by ID (metadata only)
router.get("/:id", getFileById);

// Download file from MongoDB
router.get("/download/:id", downloadFile);

// Preview file in browser
router.get("/preview/:id", previewFile);

// Delete file from MongoDB
router.delete("/:id", deleteFile);

// Get files by user email
router.get("/user/:uploadedBy", getFilesByUser);

// Get files by role
router.get("/role/:role", getFilesByRole);

module.exports = router;