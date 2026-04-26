const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  fileData: {
    type: Buffer, // Store binary file data
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number, // in bytes
    required: true
  },
  fileType: {
    type: String, // pdf, docx, txt
    required: true
  },
  uploadedBy: {
    type: String, // user email or ID
    required: true
  },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("File", fileSchema);