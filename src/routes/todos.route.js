
import express from "express";
const router = express.Router();

// Define your routes for todos here
router.get("/", (req, res) => {
  res.send("todos route is working!");
});

export default router;
