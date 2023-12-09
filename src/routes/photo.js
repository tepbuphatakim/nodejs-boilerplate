import { Router } from 'express';
import { previewPhoto } from '../controllers/photo.js';

const router = new Router();

router.get('/:path', previewPhoto);

export default router;
