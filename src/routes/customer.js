import { Router } from 'express';
import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
} from '../controllers/customer.js';
import validate from 'light-express-validator';

const router = new Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validate({ name: 'required|min:3|max:9' }), create);
router.patch('/:id', updateById);
router.delete('/:id', deleteById);

export default router;
