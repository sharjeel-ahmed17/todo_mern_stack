
import express from "express";
const router = express.Router();

// Define your routes for auth here
router.get("/", (req, res) => {
  res.send("auth route is working!");
});

export default router;
