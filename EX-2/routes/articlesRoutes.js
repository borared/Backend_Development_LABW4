import { Router } from 'express';
import articlesController from '../controllers/articlesController.js';

const router = Router();

router.get('/', articlesController.getAllArticles);
router.get('/:id', articlesController.getArticleById);
router.post('/', articlesController.createArticle);
router.put('/:id', articlesController.updateArticle);
router.delete('/:id', articlesController.deleteArticle);

export default router;
