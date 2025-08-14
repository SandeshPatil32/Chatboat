const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const User = require("../models/User");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_key";

router.post("/save", async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ userName, email, password: hashedPassword });
    await user.save();
    res.json({ message: "Account created successfully" });
  } catch (error) {
    console.log("Signup error:", error);
    res.status(500).json({error: "Failed to save"});
  }
});

router.post("/login", async (req, res) => {
  const {userName, password } = req.body;
  try{  
    const user = await User.findOne({userName});
    if(!user) return res.status(404).json({error: "User not found"});

    const isMatch = await bcrypt.compare(password, hashedPassword);
    if(!isMatch) return res.status(404).json({error: "Invalid Password"});

    const token = jwt.sign(
      {id: user._id, userName: user.userName },
      JWT_SECRET,
      {expiresIN: "20M"}
    );

    res.json({ token });
  } catch(error){
    console.error("Login error", error);
    res.status(500).json({error: "Login Failed"});
  }
});

module.exports = router;




