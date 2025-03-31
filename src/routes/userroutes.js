import { Router } from 'express';
const router = Router();
import { getUsers } from './controller/userController';

router.get('/users', getUsers);

export default router;
