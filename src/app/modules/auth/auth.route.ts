import express from 'express';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import auth from '../../middleware/auth';
import { USER_ROLES } from '../../../enum/user';
import validateRequest from '../../middleware/validateRequest';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

router.post(
  '/forget-password',
  validateRequest(AuthValidation.forgetPasswordZodSchema),
  AuthController.forgetPassword
);

router.post(
  '/verify-email',
  validateRequest(AuthValidation.verifyEmailZodSchema),
  AuthController.verifyEmail
);

router.post(
  '/reset-password',
  validateRequest(AuthValidation.resetPasswordZodSchema),
  AuthController.resetPassword
);

router.post(
  '/change-password',
  auth(USER_ROLES.ADMIN, USER_ROLES.USER),
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthController.changePassword
);

export const AuthRoutes = router;
