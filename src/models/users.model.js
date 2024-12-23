
import express from "express";
const router = express.Router();

// Define your routes for users.model.js here
router.get("/", (req, res) => {
  res.send("users.model.js route is working!");
});

export default router;
