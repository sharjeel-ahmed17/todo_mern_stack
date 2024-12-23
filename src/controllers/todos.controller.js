
import express from "express";
const router = express.Router();

// Define your routes for todos.controller.js here
router.get("/", (req, res) => {
  res.send("todos.controller.js route is working!");
});

export default router;
