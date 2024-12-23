
import express from "express";
const router = express.Router();

// Define your routes for tasks here
router.get("/", (req, res) => {
  res.send("tasks route is working!");
});

export default router;
