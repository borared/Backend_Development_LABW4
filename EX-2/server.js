import express from 'express';
import { getAllArticles, getArticleById } from './controllers/articlesController.js';
import { getAllJournalists, getJournalistById } from './controllers/journalistsController.js';
import { getAllCategories, getCategoryById } from './controllers/categoriesController.js';

const app = express();
app.use(express.json());

const PORT = 3000;

// Article routes (controller layer)
app.get('/articles', getAllArticles);
app.get('/articles/:id', getArticleById);

// Journalist routes
app.get('/journalists', getAllJournalists);
app.get('/journalists/:id', getJournalistById);

// Category routes
app.get('/categories', getAllCategories);
app.get('/categories/:id', getCategoryById);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});