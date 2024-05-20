import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/user.js' 
import bcrypt from 'bcrypt'
const router=express.Router()
import 'dotenv/config'


router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
  
    const user = await User.findOne({ email });
  
    if (!user) return res.status(400).send("Invalid username or password.");
  
    const validPassword = await bcrypt.compare(password, user.password);
  
    if (!validPassword)
      return res.status(400).send("Invalid username or password.");
    
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
  
    res.send({ token });
  });

  router.post("/register", async (req, res) => {
    // console.log(req,'jii api here')
    try {
      const { firstname,lastname,email, password } = req.body;
      console.log(req.body,"first name")
  
      const existingUser = await User.findOne({ email });
    
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists." });
      }
  
  
      const user = new User({
        firstname,
        lastname,
        email,
        password,
      });
  
      const savedUser = await user.save();
      console.log(savedUser)
      res.json({
        message: "User registered successfully",
        userId: savedUser._id,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
 
  export default router