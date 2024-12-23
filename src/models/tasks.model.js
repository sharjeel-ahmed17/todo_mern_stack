
import express from "express";
const router = express.Router();

// Define your routes for tasks.model.js here
router.get("/", (req, res) => {
  res.send("tasks.model.js route is working!");
});

export default router;
