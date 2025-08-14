const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { json } = require('express');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try{
    const {userName, email, password} = req.body;

    const existingUser = await User.findOne({ userName });
    if (existingUser) return res.status(400).json({error: "User already exists"});

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User ({ userName, email, hashedPassword});
    await newUser.save();
    res.json({message: "Signup successful"});
  } catch(error) {
    res.status(500).json({error: "Server Error"});
  }
};

exports.login = async (req, res) => {
  try{
     const {userName, password} = req.body;
     const user = await User.findOne({userName});
     if (!user) return res.status(400).json({error: "User not found"});

     const isMatch = await bcrypt.compare(password, hashedPassword);
     if (!isMatch) return res.status(400).json({error: "Invalid Password"});

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      res.json({ token });
  } catch(error) {
    res.status(500).json({error: "Server Error"});
  }
};

