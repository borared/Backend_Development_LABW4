// controllers/journalistsController.js
// Handles journalist‑related request logic

import { journalists } from "../models/journalists.js";

// Return all journalists
export const getAllJournalists = (req, res) => {
  res.json(journalists);
};

// Return a journalist by id
export const getJournalistById = (req, res) => {
  const id = Number(req.params.id);
  const journalist = journalists.find((j) => j.id === id);
  if (!journalist) {
    return res.status(404).json({ error: "Journalist not found" });
  }
  res.json(journalist);
};
