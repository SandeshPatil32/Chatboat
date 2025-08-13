const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");


const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

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

// for database ---------------------------

mongoose
  .connect("mongodb+srv://Root:Root@tutorial.jbkxbnp.mongodb.net/webApp", {})
  .then(() => console.log("mongodb connected"));

const NoteSchema = new mongoose.Schema({
  userName: String,
  email: String, 
  password: Number,
});
const sign = mongoose.model("webApp", NoteSchema);

app.post("/save", async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const sign_data = new sign({ userName, email, password });
    await sign_data.save();
    res.json({ message: "Data save" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save" });
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
