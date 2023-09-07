import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/",(req, res) => {
    res.send("Hello world");
});

// Server Setup
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`);
});