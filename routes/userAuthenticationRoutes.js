// importa o express
import express from 'express';
import { getUserByMail } from '../controllers/userAuthenticationController.js';

//////////////////
// User Routes
const userAuthenticationRouter = express.Router();
userAuthenticationRouter.get('/:usermail', getUserByMail);
export default userAuthenticationRouter; 
