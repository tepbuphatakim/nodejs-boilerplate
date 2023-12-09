import { Router } from 'express';
import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from '../controllers/customer.js';

const router = new Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);

export default router;
