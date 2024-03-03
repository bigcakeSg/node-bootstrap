import express from 'express';
import {
  deleteUser,
  getUser,
  getUserList,
  setUser,
  updateUser
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/list', getUserList);
router.get('/:userId', getUser);
router.post('/', setUser);
router.patch('/', updateUser);
router.delete('/:userId', deleteUser);

export default router;
