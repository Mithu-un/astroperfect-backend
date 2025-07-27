const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

router.post("/", async (req, res) => {
  const { question } = req.body;
  const order = new Order({ question });
  await order.save();
  res.json({ success: true });
});

router.post("/:id/reply", async (req, res) => {
  const { reply } = req.body;
  const order = await Order.findById(req.params.id);
  order.reply = reply;
  await order.save();
  res.json({ success: true });
});

module.exports = router;