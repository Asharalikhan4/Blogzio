import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

// Middlewares
app.use(express.json());

// Routes
app.get("/",(req, res) => {
    res.send("Hello world");
});
app.use("/api/users", userRoutes);

// Server Setup
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is up at ${PORT}`);
});