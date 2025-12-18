import { z } from 'zod';

const verifyEmailZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
    oneTimeCode: z.number({ required_error: 'One time code is required' }),
  }),
});

const loginZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const forgetPasswordZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
  }),
});

const resetPasswordZodSchema = z.object({
  body: z.object({
    newPassword: z.string({ required_error: 'Password is required' }),
    confirmPassword: z.string({
      required_error: 'Confirm Password is required',
    }),
  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    currentPassword: z.string({
      required_error: 'Current Password is required',
    }),
    newPassword: z.string({ required_error: 'New Password is required' }),
    confirmPassword: z.string({
      required_error: 'Confirm Password is required',
    }),
  }),
});

export const AuthValidation = {
  verifyEmailZodSchema,
  forgetPasswordZodSchema,
  loginZodSchema,
  resetPasswordZodSchema,
  changePasswordZodSchema,
};
