const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
require("dotenv").config();

// Import Routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Initialize App & Server
const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Socket.IO
const io = new Server(server, {
  cors: {
    methods: ["GET", "POST"],
  },
});

io.on("connection", (user) => {
  console.log("User connected:", user.id);

  user.on("chatMessage", (msg) => {
    console.log(`message from ${user.id}:`, msg);
    io.emit("chatMessage", msg);
  });

  user.on("disconnect", () => {
    console.log("User disconnected:", user.id);
  });
});

// ✅ MongoDB Connection
const connectDB = require("./config/db");
connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
