
import express from "express";
const router = express.Router();

// Define your routes for course.model.js here
router.get("/", (req, res) => {
  res.send("course.model.js route is working!");
});

export default router;
