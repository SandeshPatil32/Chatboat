const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const http = require("http");
const { Server } = require("socket.io");
const chatSocket = require("./socket/chatSocket");

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("api/auth",require("./routes/authRoutes"));

const io = new Server(server, { cors: { methods: ["GET", "POST"] } });
chatSocket(io);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));