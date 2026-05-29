import express from 'express';
import articlesRoutes from './routes/articlesRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';

const app = express();
app.use(express.json());

const PORT = 3000;

// Mount route modules
app.use('/articles', articlesRoutes);
app.use('/journalists', journalistRoutes);
app.use('/categories', categoriesRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});