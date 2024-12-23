
import express from "express";
const router = express.Router();

// Define your routes for course here
router.get("/", (req, res) => {
  res.send("course route is working!");
});

export default router;
