import express from "express";
import pgClient from "../db.js";

const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  try {
    const result = await pgClient.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default userRoutes;
