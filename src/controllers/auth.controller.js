
import express from "express";
const router = express.Router();

// Define your routes for auth.controller.js here
router.get("/", (req, res) => {
  res.send("auth.controller.js route is working!");
});

export default router;
