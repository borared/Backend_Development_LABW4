// controllers/articlesController.js
// Handles article‑related request logic (controller layer)

import { articles } from "../models/articles.js";

// Return all articles
export const getAllArticles = (req, res) => {
  res.json(articles);
};

// Return a single article by its id
export const getArticleById = (req, res) => {
  const id = Number(req.params.id);
  const article = articles.find((a) => a.id === id);
  if (!article) {
    return res.status(404).json({ error: "Article not found" });
  }
  res.json(article);
};
