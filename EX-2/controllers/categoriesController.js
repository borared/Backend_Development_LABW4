// controllers/categoriesController.js
// Handles category‑related request logic

import { categories } from "../models/categories.js";

// Return all categories
export const getAllCategories = (req, res) => {
  res.json(categories);
};

// Return a category by id
export const getCategoryById = (req, res) => {
  const id = Number(req.params.id);
  const category = categories.find((c) => c.id === id);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.json(category);
};
