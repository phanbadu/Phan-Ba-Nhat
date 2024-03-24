import express from 'express';
import { signout, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/signout', signout);
router.get('/:userId', verifyToken, getUser);

export default router;
