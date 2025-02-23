import express from 'express';
import { register, login } from '../controllers/auth.js';

const router = express.Router();

router.get('/', (req, res) => res.send('Auth endpoint available'));
router.post('/register', register);
router.post('/login', login);

export default router;
