import express from 'express';
import { UserController } from './user.controller';
import { userValidation } from './user.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidation.createUserSchemaZod),
  UserController.createUser
);

export const UserRoutes = router;
