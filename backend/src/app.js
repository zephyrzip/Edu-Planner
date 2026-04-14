const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");


const app = express();

// IMPORTANT: allows JSON body parsing
app.use(express.json());

// connect database
connectDB();

// import routes
const authRoutes = require("./routes/authRoutes");

// mount routes
app.use("/api/auth", authRoutes);

// test route
app.get("/test", (req, res) => {
    res.send("Backend + MongoDB running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});