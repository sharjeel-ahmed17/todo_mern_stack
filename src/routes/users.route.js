
import express from "express";
const router = express.Router();

// Define your routes for users here
router.get("/", (req, res) => {
  res.send("users route is working!");
});

export default router;
