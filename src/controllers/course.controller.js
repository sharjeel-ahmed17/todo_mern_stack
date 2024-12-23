
import express from "express";
const router = express.Router();

// Define your routes for course.controller.js here
router.get("/", (req, res) => {
  res.send("course.controller.js route is working!");
});

export default router;
