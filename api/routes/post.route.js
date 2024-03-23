import express from 'express';
import { create, see } from '../controllers/post.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/see', verifyToken, see);

export default router;
