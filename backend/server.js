const express = require('express');
const cors = require('cors');
const http = require('http');
const dotenv = require('dotenv');
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const chatSocket = require("./socket/chatSocket");

dotenv.config();
connectDB();

const app =express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

const io = new Server (server, {
  cors: {
    methods: ["GET", "POST"],
  },
});
chatSocket(io);

const PORT = process.env.PORT
server.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);