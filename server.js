const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const horoscopeAPI = require("./routes/horoscopeAPI");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/astroperfect");

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/horoscope", horoscopeAPI);

app.listen(5000, () => console.log("Server running on port 5000"));