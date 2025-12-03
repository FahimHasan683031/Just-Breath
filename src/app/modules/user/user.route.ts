import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import { USER_ROLES } from '../../../enum/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(UserValidation.createUserZodSchema),
    UserController.createUser
  )
  .get( UserController.getAllUser)

  router.patch(
    '/:id',
    auth( USER_ROLES.ADMIN,USER_ROLES.USER ),
    validateRequest(UserValidation.updateUserZodSchema),
    UserController.updateProfile
  );

export const UserRoutes = router;
