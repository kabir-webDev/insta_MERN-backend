const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Walah.... Bingo");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return res.status(404).json({ error: "Please Add all the fields" });
  }
  res.json({ message: "Successfully Posted" });
});

module.exports = router;
