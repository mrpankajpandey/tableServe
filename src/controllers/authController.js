import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Owner Signup
export const ownerSignup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(401).json({ message: "Email already exists" });
      }
      if (existingUser.phone === phone) {
        return res.status(401).json({ message: "Phone number already exists" });
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Signup successful", user });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "Signup failed" });
  }
};

// Owner Login
export const ownerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ message: "Login successful", token});
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// Admin Login (Hardcoded Credentials)
export const adminLogin = (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@restaurant.com" && password === "admin123") {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Admin login successful", token });
  } else {
    res.status(403).json({ error: "Invalid admin credentials" });
  }
};
