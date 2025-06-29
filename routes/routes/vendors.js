const express = require("express");
const router = express.Router();

const vendors = [
  { id: 1, name: "Guardian Security", category: "Security", city: "Chicago" },
  { id: 2, name: "Rapid Logistics", category: "Transportation", city: "Atlanta" }
];

router.get("/", (req, res) => {
  res.json(vendors);
});

module.exports = router;
