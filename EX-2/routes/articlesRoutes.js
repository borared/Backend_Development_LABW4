import { Router } from 'express';
import * as articlesController from '../controllers/articlesController.js';

const router = Router();

router.get('/', articlesController.getAllArticles);
router.get('/:id', articlesController.getArticleById);

export default router;
