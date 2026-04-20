const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;

        // Debug (temporary — remove later)
        console.log("DB URI received:", uri);

        // Safety check
        if (!uri) {
            throw new Error("MONGO_URI is missing. Check your .env file and dotenv config.");
        }

        await mongoose.connect(uri);

        console.log("MongoDB connected successfully 🚀");
    } catch (error) {
        console.error("MongoDB connection failed ❌:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;