import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import connectDB from "./config/db";

// Middlewares
app.use(express.json());

// Routes
app.get("/",(req, res) => {
    res.send("Hello world");
});

// Server Setup
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is up at ${PORT}`);
});