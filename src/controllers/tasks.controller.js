
import express from "express";
const router = express.Router();

// Define your routes for tasks.controller.js here
router.get("/", (req, res) => {
  res.send("tasks.controller.js route is working!");
});

export default router;
