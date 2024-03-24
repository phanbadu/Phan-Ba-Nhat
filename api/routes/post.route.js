import express from 'express';
import { create, see, seeUser, seePost } from '../controllers/post.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/see', verifyToken, see);
router.get('/see/:userId', verifyToken, seeUser);
router.get('/getpost/:id', verifyToken, seePost);

export default router;
