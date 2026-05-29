import { Router } from 'express';
import * as journalistsController from '../controllers/journalistsController.js';

const router = Router();

router.get('/', journalistsController.getAllJournalists);
router.get('/:id', journalistsController.getJournalistById);
router.post('/', journalistsController.createJournalist);
router.put('/:id', journalistsController.updateJournalist);
router.delete('/:id', journalistsController.deleteJournalist);

export default router;
