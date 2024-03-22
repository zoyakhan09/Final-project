import express from "express";


const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const userRoutes = require("./Routes/auth");
const eventRoutes = require("./Routes/eventRoutes");
const connectDB = require("./db/db");

connectDB();

const corsOptions = {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"], 
    allowedHeaders: ["Content-Type"], 
    credentials: true 
};

app.use(express.json());
app.use(cors(corsOptions)); 


app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Internal server error" });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});