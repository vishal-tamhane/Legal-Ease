const express = require("express");
const jwt = require("jsonwebtoken");
const Case = require("../models/Case");

const router = express.Router();

router.post("/file-case", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "secret_key");

  const cases = new Case({ ...req.body, filedBy: decoded.id });
  await cases.save();
  res.status(201).send("Case filed successfully");
});

module.exports = router;