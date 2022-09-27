// importa o express
import express from 'express';
import { deletUser, getAllUser, getUser, updateUser, insUser, getUserByMail } from '../controllers/controllers.js';

//////////////////
// User Routes
const userRouter = express.Router();
userRouter.get('/', getAllUser);
userRouter.get('/:id', getUser);
userRouter.get('/mail/:usermail', getUserByMail);
userRouter.post('/', insUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deletUser);
export default userRouter; 
