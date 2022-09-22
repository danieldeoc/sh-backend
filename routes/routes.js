// importa o express
import express from 'express';
import { deletUser, getAllUser, getUser, updateUser, insUser } from '../controllers/controllers.js';
const userRouter = express.Router();

userRouter.get('/', getAllUser);
userRouter.get('/:id', getUser);
userRouter.post('/', insUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deletUser);

// .get, .post, .put, (url como = ('/:id') )

export default userRouter;