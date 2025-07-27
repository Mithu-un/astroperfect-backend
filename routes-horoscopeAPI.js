const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const { date, time, lat, lon, tz } = req.body;
  try {
    const response = await axios.post("https://json.astrologyapi.com/v1/basic_gem_suggestion", {
      datetime: ${date} ${time},
      latitude: lat,
      longitude: lon,
      timezone: tz,
    }, {
      headers: {
        Authorization: "Basic " + Buffer.from("userId:apiKey").toString("base64"),
        "Content-Type": "application/json",
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "API failed" });
  }
});

module.exports = router;