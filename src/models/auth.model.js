
import express from "express";
const router = express.Router();

// Define your routes for auth.model.js here
router.get("/", (req, res) => {
  res.send("auth.model.js route is working!");
});

export default router;
