
import express from "express";
const router = express.Router();

// Define your routes for users.controller.js here
router.get("/", (req, res) => {
  res.send("users.controller.js route is working!");
});

export default router;
