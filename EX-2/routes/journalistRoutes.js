import { Router } from 'express';
import * as journalistsController from '../controllers/journalistsController.js';

const router = Router();

router.get('/', journalistsController.getAllJournalists);
router.get('/:id', journalistsController.getJournalistById);

export default router;
