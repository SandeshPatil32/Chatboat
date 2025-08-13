const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://Root:Root@tutorial.jbkxbnp.mongodb.net/testing", {})
  .then(() => console.log("mongodb connected"));

const NoteSchema = new mongoose.Schema({
  notes: String,
  email: String,
  age: Number,
});
const Note = mongoose.model("Note", NoteSchema);

app.post("/save", async (req, res) => {
  const { notes, email, age } = req.body;

  try {
    const newNote = new Note({ notes, email, age });
    await newNote.save();
    res.json({ message: "Data save" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

