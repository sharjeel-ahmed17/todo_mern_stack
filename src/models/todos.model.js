
import express from "express";
const router = express.Router();

// Define your routes for todos.model.js here
router.get("/", (req, res) => {
  res.send("todos.model.js route is working!");
});

export default router;
