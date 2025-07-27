const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = new User({ name, email, password: hashed, role });
    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;
  const user = await User.findOne({ email, role });
  if (!user) return res.json({ success: false });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ success: false });

  const token = jwt.sign({ userId: user._id, role: user.role }, "SECRET_KEY");
  res.json({ success: true, token });
});

module.exports = router;