import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
const app = express();

import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import { errorResponseHandler, invalidPathHandler } from "./middlewares/errorHandler";

const allowedOrigins = ["http://localhost:5173"];


// Middlewares
app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // Allow cookies and headers with credentials
}));

//  Static Assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


// Routes
app.get("/",(req, res) => {
    res.send("Hello world");
});
app.use("/api/users", userRoutes);

// Custom Error Handler
app.use(invalidPathHandler);
app.use(errorResponseHandler);

// Server Setup
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is up at ${PORT}`);
});